import React, { useState } from 'react';

const ToggleTruncation = ({ children, charLimit, className }) => {
    if (children.length > charLimit) {
        const [text, setText] = useState(children.slice(0, charLimit));
        const [isExpanded, setIsExpanded] = useState(false);
        const [buttonText, setButtonText] = useState('...read more');
        const handleClick = () => {
            if (!isExpanded) {
                setText(children);
                setButtonText('...read less');
                setIsExpanded(true);
            } else if (isExpanded) {
                setText(children.slice(0, charLimit));
                setButtonText('...read more');
                setIsExpanded(false);
            }
        }
        return <p className={className}>
            {text}
            <button onClick={() => handleClick()}>{buttonText}</button>
        </p>
    }
    return children;
}

export default ToggleTruncation;