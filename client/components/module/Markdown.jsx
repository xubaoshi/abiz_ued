import React from 'react'
import marked from 'marked'

marked.setOptions({
    renderer: new marked.Renderer(),
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: false,
    smartLists: true,
    smartypants: false
});

export default class Markdown extends React.Component {
    constructor(props){
        super(props)
        this.createMarkup = this.createMarkup.bind(this)
    }
    createMarkup() {
        const { content } = this.props
        return { __html: marked(content) };
    }
    render() {
        return (
            <span dangerouslySetInnerHTML={this.createMarkup()}></span>
        )
    }
}
