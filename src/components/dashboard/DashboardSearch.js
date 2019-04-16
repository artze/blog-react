import React from 'react';
import { connect } from 'react-redux';
import { searchByTitle } from '../../redux/actions/search';

class DashboardSearch extends React.Component {
    onSearchTitleInputChange = (e) => {
        const searchTitleText = e.target.value;
        this.props.searchByTitle(searchTitleText);
    }
    
    render() {
        return (
            <div>
                <input
                    type="text"
                    placeholder="Search title"
                    onChange={this.onSearchTitleInputChange}
                    value={this.props.searchTitleText}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    searchTitleText: state.search.title
})

const mapDispatchToProps = (dispatch) => ({
    searchByTitle: (title) => dispatch(searchByTitle(title))
})

export default connect(mapStateToProps, mapDispatchToProps)(DashboardSearch);