import { Outlet } from 'react-router-dom';
import SearchBar, { DataSource, SearchBarProperty } from '@app/home/components/SearchBar';
import { dataSources } from '@app/home/dataSource';
import { useState } from 'react';

const HomeLayout = () => {
  /**
   * TODO Home (search page) 에서 검색 등의 이동으로 패스가 변경되어도 계속 유지가 될 컴포넌트를 추가
   * UI 상단의 검색 창 및 검색 엔진 부분
   */

  const defaultKeyword = '건대맛집';

  const [keyword, setKeyword] = useState(defaultKeyword);
  const [dataSource, setDataSource] = useState<DataSource[]>(
    dataSources.filter((src) => {
      return src.selected;
    })
  );

  const searchBarProp: SearchBarProperty = {
    dataSources: dataSources,
    current: defaultKeyword,
    popular: ['기후 변화', '에어컨 만든사람', '비트코인 지금 사나요?'],
    onSearch: (keyword: string, selected: DataSource[]) => {
      setKeyword(keyword);
      setDataSource(selected);
    }
  };
  console.log('render');
  return (
    <>
      <SearchBar {...searchBarProp} />
      {dataSource.map((src, index) => {
        return (
          <div key={index}>
            {src.label} {keyword} 검색결과
          </div>
        );
      })}
      <Outlet />
    </>
  );
};

export default HomeLayout;
