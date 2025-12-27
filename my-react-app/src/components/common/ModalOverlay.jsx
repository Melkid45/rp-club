
const ModalOverlay = ({ isOpen, onClose, children, title, className }) => {
    if (!isOpen) return null
    return (
        <div className="modal--overlay" onClick={onClose}>
            <div className="modal--overlay-content" onClick={e => e.stopPropagation()}>
                <div className="modal--overlay-head">
                    <h2 className="semi-text">{title}</h2>
                    <button className="modal-close" onClick={onClose}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.707031 22.7071L22.707 0.707092" stroke="url(#paint0_linear_937_5168)" stroke-width="2" />
                            <path d="M22.707 22.7071L0.707031 0.707092" stroke="url(#paint1_linear_937_5168)" stroke-width="2" />
                            <defs>
                                <linearGradient id="paint0_linear_937_5168" x1="11.707" y1="0.707092" x2="11.707" y2="22.7071" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#C9022D" />
                                    <stop offset="1" stop-color="#630116" />
                                </linearGradient>
                                <linearGradient id="paint1_linear_937_5168" x1="11.707" y1="0.707092" x2="11.707" y2="22.7071" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#C9022D" />
                                    <stop offset="1" stop-color="#630116" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </button>
                </div>
                {children}
            </div>
        </div>
    )
}

export default ModalOverlay
