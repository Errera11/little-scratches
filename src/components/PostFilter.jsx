import React from 'react';
import MySelect from "../UI/MySelect/MySelect";

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
            <MySelect
                value={filter.sort}
                onChange={setFilter}
                defaultValue={'Sort by'}
                options={[{value: 'title', name: 'By name'}, {value: 'body', name: 'By description'}]}
                filter={filter}
            />

            <input placeholder={'Search...'} onChange={e => setFilter({...filter, query: e.target.value})}/>
        </div>
    );
};

export default PostFilter;