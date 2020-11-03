const ModalWindow = ( props ) => 
{
    const close_click = ( ) => 
    {
        set_show_modal(0);
        document.getElementsByTagName("html")[0].setAttribute("style", "overflow:auto;");
    }

    const { t, set_show_modal } = props;
    return (
        <div id="openModal" className="modal">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h3 className="modal-title">{t("modal_title")}</h3>
                        <span onClick={close_click} className="close">×</span>
                    </div>
                    <div className="modal-body">    
                        <p>{t("modal_text")}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalWindow