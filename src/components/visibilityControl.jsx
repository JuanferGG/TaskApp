import React from 'react';

const VisibilityControl = ({ isChecked, setShowCompleted, cleanTask}) => {
    
    const handleDelete = () => {
        if (window.confirm('Are you sure you want to delete it?')) {
            cleanTask()
        }
    }
    return (
        <div>
            <div className='d-flex justify-content-between bg-secondary text-withe text-center p-2 border-secundary'>
                <div className='form-check form-switch'>
                    <input
                    className='form-check-input'
                    checked={isChecked}
                    type='checkbox' 
                    onChange={(e) => setShowCompleted(e.target.checked)}/>
                    {" "}
                    <label>Show Task Done</label>
                </div>

                <button onClick={handleDelete} className='btn btn-danger'>Clear</button>
            </div>
        </div>
    );
}

export default VisibilityControl;