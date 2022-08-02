import React, { useRef, useState, useEffect } from "react";
import Barcode from "react-barcode";
import styled from "styled-components";
import { faXmark } from '@fortawesome/free-solid-svg-icons';


const CreateBarCode = (codeValue) => {
    const Wrapper = styled.div`
                    position: fixed;
                    top: 0;
                    right: 0;
                    bottom: 0;
                    left: 0;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    font-family: sans-serif;
                    `;

    const Input = styled.input`
                    margin: 25px 0;
                    border: none;
                    border-bottom: 1px solid #eee;
                    padding: 5px;
                    font-size: 14px;
                    text-align: center;
                    outline: none;
                    `;

    const Select = styled.select`
                    margin-bottom: 15px;
                    `;
    const [open, setOpen] = useState(true);

    const handleClose = () => {
        setOpen(false);
    };

    const Button = styled.button``;
    console.log("check create barcode")
    const svgRef = useRef(null);
    // const [input, setInput] = useState(123456);
    const [format, setFormat] = useState("CODE128");

    const handleDownload = () => {
        const preface = '<?xml version="1.0" standalone="no"?>\r\n';
        const svgElement = svgRef.current.refs.renderElement.outerHTML;
        const svgBlob = new Blob([preface, svgElement], {
            type: "image/svg+xml;charset=utf-8"
        });
        const svgUrl = URL.createObjectURL(svgBlob);
        const downloadLink = document.createElement("a");
        downloadLink.href = svgUrl;
        downloadLink.download = "barcode.svg";
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    };

    return (
        <>
            <Dialog open={open} onClose={handleClose} maxWidth='lg' fullWidth={true}>
                <div className={styles.closeButtonWrapper} onClick={handleSearchClose}>
                    <button className={styles.closeButton}><FontAwesomeIcon icon={faXmark} /></button>
                </div>
                <Wrapper>
                    <Barcode
                        ref={svgRef}
                        value={codeValue}
                        // displayValue={false}
                        height={90}
                        format={format}
                        font="Avenir Next"
                        fontOptions="600"
                        textMargin={4}
                        margin={0}
                    />
                    <Input
                        type="text"
                        placeholder="barcode"
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <Select onChange={(e) => setFormat(e.target.value)}>
                        <option>CODE128</option>
                        <option>CODE39</option>
                        <option>UPC</option>
                        <option>EAN13</option>
                    </Select>
                    <Button onClick={handleDownload}>Download</Button>
                </Wrapper>
            </Dialog>
        </>
    )

}

export default CreateBarCode;

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
