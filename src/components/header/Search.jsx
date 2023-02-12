import styled from "styled-components";

const SearchBox = styled.div`
  display: flex;
  height: 100%;
  min-width: 304px;
  width: calc(100% - 540px);
  margin: 0 auto 0 12px;
  justify-content: flex-start;
  align-items: center;

  form {
    display: inline-block;
    width: 100%;
    height: 36px;
    max-width: 564px;
    position: relative;

    div {
      display: flex;
      justify-content: space-between;
      border-radius: 2px;
      background-color: #fff;

      input {
        padding: 0 16px;
        border-radius: 2px 0 0 2px;
        border: 0;
        font-size: 14px;
        height: 36px;
        width: 100%;
        outline: none;
      }
      button {
        height: 36px;
        width: 44px;
        border-radius: 2px;
        cursor: pointer;
        padding: 4px 12px 0 8px;
        border: none;
        background-color: #fff;
      }
    }
  }
`;

const Search = () => {
  return (
    <SearchBox>
      <form action="">
        <div>
          <input
            type="text"
            placeholder="Search for products, brands and more"
          />
          <button>
            <img src="\images\search-icon.svg" alt="" />
          </button>
        </div>
      </form>
    </SearchBox>
  );
};

export default Search;
