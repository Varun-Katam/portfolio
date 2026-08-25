export default function Footer({onScrollClick}){
    return(
    <footer>
        © 2026 Varun_Katam. All rights are reserved.
        <div className="my-icon top" onClick={onScrollClick}><i className="bi bi-arrow-up me-icon"></i></div>
    </footer>
    )
}