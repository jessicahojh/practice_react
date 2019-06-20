import React, {Component} from "react"

class UnreadMessages extends Component {
    constructor() {
        super()
        this.state = {
            unreadMessages: ["a", "b"]
        }
    }
    // &&
    // false && false
    // This example shows how if the first part before && is true, then the
    // statement will be true 
    render() {
        return (
            <div>
                {
                    this.state.unreadMessages.length > 0 && 
                    <h2>You have {this.state.unreadMessages.length} unread messages!</h2>
                }
            </div>
        )
    }
}

export default UnreadMessages