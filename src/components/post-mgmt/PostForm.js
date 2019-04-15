import React from 'react';

class PostForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.post.title || '',
            content: this.props.post.content || ''
        }
    }

    onTitleChange = (e) => {
        const title = e.target.value;
        this.setState(() => ({ title }))
    }

    onContentChange = (e) => {
        const content = e.target.value;
        this.setState(() => ({ content }));
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit({
            title: this.state.title,
            content: this.state.content
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        placeholder="Post Title"
                        value={this.state.title}
                        onChange={this.onTitleChange}
                    />
                    <textarea
                        cols="30"
                        rows="10"
                        placeholder="Post content"
                        value={this.state.content}
                        onChange={this.onContentChange}
                    />
                    <button>
                        Submit
                    </button>
                </form>
            </div>
        )
    }
}

export default PostForm;
