import React from 'react'
import FilterLink from '../containers/FilterLink'

const Footer = () => (
  <p>
    Show:
    {" "}
    <FilterLink filter="SHOW_ALL">
      <span>All</span>
    </FilterLink>
    {", "}
    <FilterLink filter="SHOW_ACTIVE">
      <span>Active</span>
    </FilterLink>
    {", "}
    <FilterLink filter="SHOW_COMPLETED">
      <span>Completed</span>
    </FilterLink>
  </p>
)
export default Footer
