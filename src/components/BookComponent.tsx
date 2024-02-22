// BookComponent.tsx
import React, { useState } from "react";
import { Modal } from "antd";
import { Document, Page } from "react-pdf";

interface BookComponentProps {
  coverUrl: string;
  pdfUrl: string;
}

const BookComponent: React.FC<BookComponentProps> = ({ coverUrl, pdfUrl }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div>
      <div className="w-32 h-48 bg-gray-200 cursor-pointer" onClick={showModal}>
        <img
          src={coverUrl}
          alt="Book Cover"
          className="w-full h-full object-cover"
        />
      </div>
      <Modal
        title="Book Preview"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        width={800}
      >
        <Document file={pdfUrl}>
          <Page pageNumber={1} />
        </Document>
      </Modal>
    </div>
  );
};

export default BookComponent;
