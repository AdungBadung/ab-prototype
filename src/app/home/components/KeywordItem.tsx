import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import { css } from '@emotion/react';

type KeywordItemProp = {
  keyword: string;
  type: string;
  index: number;
  onDelete?: () => void;
  onClick: () => void;
};

const SearchBar = ({ keyword, type, index, onDelete, onClick }: KeywordItemProp) => {
  return (
    <div
      css={css`
        display: flex;
        align-items: center;
        justify-content: flex-start;
      `}
    >
      <div
        css={css`
          width: 10vw;
          display: flex;
          justify-content: center;
        `}
      >
        {type === 'history' ? (
          <SearchIcon />
        ) : (
          <div
            css={css`
              text-align: enter;
            `}
          >
            {index + 1}
          </div>
        )}
      </div>
      <div
        css={css`
          display: flex;
          justify-content: flex-start;
          width: 80vw;
        `}
        onClick={onClick}
      >
        {keyword}
      </div>
      <div
        css={css`
          width: 10vw;
        `}
      >
        {type === 'history' ? (
          <ClearIcon
            css={css`
              cursor: pointer;
            `}
            focusable={true}
            onClick={onDelete}
          />
        ) : null}
      </div>
    </div>
  );
};

export default SearchBar;
