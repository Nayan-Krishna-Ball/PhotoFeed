//

import Modal from "@/components/Model";
import PhotoDetails from "@/components/PhotoDetails";

const PhotoModal = ({ params: { id, lang } }) => {
  return (
    <Modal>
      <PhotoDetails id={id} lang={lang} />
    </Modal>
  );
};

export default PhotoModal;
