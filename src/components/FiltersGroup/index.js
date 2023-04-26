import './index.css'
import {BsSearch} from 'react-icons/bs'

const FiltersGroup = props => {
  const {
    updateSearchText,
    inputSearch,
    categoryOptions,
    updateProductDetails,
    onClickCategoryItem,
    activeCategoryId,
    activeRatingId,
    ratingsList,
    onClickRatingItem,
    onClickClearFilters,
  } = props

  const changeSearchTextInput = event => {
    updateSearchText(event.target.value)
  }

  const changeProductDetails = () => {
    updateProductDetails()
  }

  const onClickKeyDown = event => {
    if (event.key === 'Enter') {
      console.log(event.key)
      updateProductDetails()
    }
  }

  const inputFilterSearch = () => (
    <div className="input-filter-group-container">
      <input
        type="search"
        className="input-filter-group-search"
        placeholder="Search"
        onChange={changeSearchTextInput}
        value={inputSearch}
        onKeyDown={onClickKeyDown}
      />
      <button
        type="button"
        className="input-filter-group-button"
        onClick={changeProductDetails}
      >
        <BsSearch />
      </button>
    </div>
  )

  const categoryItem = eachCategory => {
    const {name, categoryId} = eachCategory

    const selectCategoryItem = () => {
      onClickCategoryItem(categoryId)
    }
    const selectedItem = activeCategoryId === categoryId ? 'selected-item' : ''
    return (
      <li
        className="category-list-item "
        onClick={selectCategoryItem}
        key={categoryId}
      >
        <p className={selectedItem}>{name}</p>
      </li>
    )
  }

  const categorySearch = () => (
    <div className="category-container">
      <h1 className="category-container-heading">Category</h1>
      <ul className="category-list">
        {categoryOptions.map(eachCategory => categoryItem(eachCategory))}
      </ul>
    </div>
  )

  const ratingItem = eachRating => {
    const {imageUrl, ratingId} = eachRating

    const selectRatingItem = () => {
      onClickRatingItem(ratingId)
    }
    const selectedItem = activeRatingId === ratingId ? 'selected-item' : ''
    return (
      <li
        className="rating-list-item "
        onClick={selectRatingItem}
        key={ratingId}
      >
        <img
          className="stars-image"
          src={imageUrl}
          alt={`rating ${ratingId}`}
        />
        <p className={selectedItem}>&up</p>
      </li>
    )
  }

  const ratingSearch = () => (
    <div className="rating-search-container">
      <h1 className="rating-search-container-heading">Rating</h1>
      <ul className="rating-list">
        {ratingsList.map(eachRating => ratingItem(eachRating))}
      </ul>
    </div>
  )

  const clearFilters = () => (
    <div className="clear-filters-container">
      <button
        type="button"
        className="clear-button"
        onClick={onClickClearFilters}
      >
        Clear Filters
      </button>
    </div>
  )

  return (
    <div className="filters-group-container">
      {inputFilterSearch()}
      {categorySearch()}
      {ratingSearch()}
      {clearFilters()}
    </div>
  )
}

export default FiltersGroup
