import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

export default function SearchForm() {
  return (
    <form id="z1_search_form" name="searchForm" method="get" role="search" autoComplete="off" action="/search/">
    <input id="z1_search_field" name="q" autoComplete="off" placeholder="I'm looking for..." maxLength="100" data-type="search_element" role="combobox" aria-controls="z1_search_suggest_wrapper" type="search" aria-label="Start search" aria-expanded="false" aria-autocomplete="list" aria-owns="z1_search_autosuggest" />
    <input type="hidden" name="catField" />
    <button className="z1_search_button" tabIndex="0" type="submit" aria-label="search" disabled=""><SearchIcon></SearchIcon></button>
    </form>
  )
}
