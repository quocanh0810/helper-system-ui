import { Button, Card, Modal } from "flowbite-react";
import classNames from 'classnames/bind';
import styles from './Result.module.scss';

const cx = classNames.bind(styles);

interface ResultModalProps {
  show: boolean;
  onClose: () => void;
}

export function ResultModal({
  show,
  onClose,
}: ResultModalProps) {
  return (
    <Modal
      show={show}
      onClose={onClose}
    >
      <Modal.Header className={cx('modal-header')}>
        Kết quả
      </Modal.Header>
      <Modal.Body className="h-[80vh] overflow-y-auto">
      <p className="font-normal text-gray-700 dark:text-gray-400">Xếp hạng thầy cô:</p>
        <div className="space-y-6 mt-4">
        <Card
            horizontal={true}
            imgSrc="https://soict.hust.edu.vn/wp-content/uploads/ta_hai_tung_vt_soict.jpg"
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              PGS.TS. Tạ Hải Tùng
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Phó Giáo sư, Khoa Kỹ thuật Máy tính
            </p>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Điểm đánh giá: 5.0
            </p>
          </Card>
        </div>
        <div className="space-y-6 mt-4">
          <Card
            horizontal={true}
            imgSrc="https://soict.hust.edu.vn/wp-content/uploads/IMG_9136_copy.jpg"
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              PGS.TS. Nguyễn Linh Giang
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Phó Giáo sư, Khoa Kỹ thuật Máy tính
            </p>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Điểm đánh giá: 4.9
            </p>
          </Card>
        </div>
        <div className="space-y-6 mt-4">
        <Card
            horizontal={true}
            imgSrc="https://soict.hust.edu.vn/wp-content/uploads/2019/08/Nguy%E1%BB%85n-Th%E1%BB%8B-Thanh-Nga-1024x1534.jpg"
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              TS. Nguyễn Thị Thanh Nga
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Giảng viên, Khoa Kỹ thuật Máy tính
            </p>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Điểm đánh giá: 4.8
            </p>
          </Card>
        </div>
        
      </Modal.Body>
      <Modal.Footer>
        <Button
          color="gray"
          onClick={onClose}
        >
          Đóng
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
