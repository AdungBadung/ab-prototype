import { css, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import KeywordItem from './KeywordItem';

export type DataSource = {
  iconSrc: string;
  label: string;
  selected?: boolean;
};

export type SearchBarProperty = {
  current?: string;
  popular?: string[];
  dataSources: DataSource[];
  onSearch: (keywork: string, selected: DataSource[]) => void;
};

const SearchBar = (props: SearchBarProperty) => {
  const [extend, setExtend] = useState(false);
  const [history, setHistory] = useState<string[]>([]);
  const [keyword, setKeyword] = useState(props.current || '');
  const [selected, setSelected] = useState(props.dataSources);

  return (
    <div
      css={css`
        ${extend &&
        `
          background:white;
          width:100%;
          height: 100%;
          position:absolute;
          opacity:100%;
          z-index:10;
        `}
        display: flex;
        flex-direction: column;
      `}
    >
      <div
        css={css`
          display: flex;
          align-items: center;
        `}
      >
        <TextField
          css={css`
            flex: 1;
          `}
          defaultValue={props.current}
          value={keyword}
          variant="outlined"
          onChange={(e) => {
            setKeyword(e.target.value);
          }}
          onFocus={() => {
            setExtend(true);
          }}
        />
        <SearchIcon
          css={css`
            width: 3rem;
            cursor: pointer;
            text-align: center;
          `}
          onClick={() => {
            const trim = keyword.trim();
            if (trim === '') return;

            const newHistory = new Set([trim, ...history]);
            setHistory(Array.from(newHistory).slice(0, 5));
            setExtend(false);

            props.onSearch(
              trim,
              selected.filter((src) => {
                return src.selected === true;
              })
            );
          }}
        />
      </div>
      <div
        css={css`
          display: flex;
          justify-content: space-between;
          align-items: center;
          ${extend &&
          `
            display:none;
          `}
        `}
      >
        {selected.map((src, index) => {
          return (
            <div
              key={index}
              css={css`
                display: flex;
                flex-direction: column;
                align-items: center;
                opacity: ${src.selected ? '100%' : '50%'};
              `}
              onClick={() => {
                setSelected((prev) => {
                  return prev.map((item) => {
                    let isSelected = item.selected;
                    if (item.label === src.label) {
                      isSelected = !isSelected;
                    }
                    return { ...item, selected: isSelected };
                  });
                });
              }}
            >
              <div
                css={css`
                  width: 3rem;
                  height: 3rem;
                  border-radius: 50%;
                  background: url(${src.iconSrc});
                  background-size: 3rem 3rem;
                  cursor: pointer;
                `}
              ></div>
              <div
                css={css`
                  text-align: center;
                `}
              >
                {src.label}
              </div>
            </div>
          );
        })}
      </div>
      {extend ? (
        <div>
          {history.map((historyItem, idx) => (
            <KeywordItem
              key={idx}
              keyword={historyItem}
              type="history"
              index={idx}
              onClick={() => {
                const newHistory = new Set([historyItem, ...history]);
                setKeyword(historyItem);
                setHistory(Array.from(newHistory).slice(0, 5));
                setExtend(false);

                props.onSearch(
                  historyItem,
                  selected.filter((src) => {
                    return src.selected === true;
                  })
                );
              }}
              onDelete={() => {
                setHistory((prev) => {
                  return prev.filter((history) => {
                    return history !== historyItem;
                  });
                });
              }}
            />
          ))}
          {props.popular?.map((popularItem, idx) => (
            <KeywordItem
              key={idx}
              keyword={popularItem}
              type="popular"
              index={idx}
              onClick={() => {
                setKeyword(popularItem);
                const newHistory = new Set([popularItem, ...history]);
                setHistory(Array.from(newHistory).slice(0, 5));
                setExtend(false);

                props.onSearch(
                  popularItem,
                  selected.filter((src) => {
                    return src.selected === true;
                  })
                );
              }}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default SearchBar;
