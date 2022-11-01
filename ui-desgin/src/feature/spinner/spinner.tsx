import './assets/index.scss';
export default function Spinner()
{
    return (
        <div className="spinner">
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" >
                <circle cx="25" cy="25" r="20" stroke="black" strokeWidth="2" fill="none" />
            </svg>
        </div>
    );
}