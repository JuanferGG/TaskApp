import React from 'react';

const VisibilityControl = ({ isChecked, setShowCompleted, cleanTask}) => {
    
    const handleDelete = () => {
        if (window.confirm('Are you sure you want to delete it?')) {
            cleanTask()
        }
    }
    return (
        <div>
            <div>
                <input
                checked={isChecked}
                type='checkbox' 
                onChange={(e) => setShowCompleted(e.target.checked)}/>
                {" "}
                <label>Show Task Done</label>

                <button onClick={handleDelete}>Clear</button>
            </div>
        </div>
    );
}

export default VisibilityControl;