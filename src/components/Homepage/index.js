import React from 'react'
import Banner from '../banner/banner.component'
import Card from '../card/card.component'
import SearchBox from '../search-box/search-box.component'

export default function Homepage(props) {
    return (
        <div>
        <Banner />
        <SearchBox onInputChange={props.onInputChange} />
        {props.id && props.searchName !== "" ? (
          <Card profile={props.userData} />
        ) : (
          <div className="no-data">
            No user Found! <br />
          </div>

        )}
        </div>
    )
}
