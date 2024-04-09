import { useState } from 'react';
import { Spinner } from 'flowbite-react';
import RangeSlider from 'react-bootstrap-range-slider';
import { ResultModal } from '../components/ResultModal';


export default function HelperForm() {
  
  const [toggleModal, setToggleModal] = useState(true);
  const [loading, setLoading] = useState(false);

  //Trình độ
  const [ level, setLevel ] = useState<string | null>(null);

  //Số năm giảng dạy
  const [ teachingexperience, setTeachingExperience ] = useState(0);

  //Định hướng nghiên cứu
  const [researchforcus, setResearchFocus] = useState<string | null>(null);

  //Lĩnh vực
  const [teacherfield, setTeacherField] = useState<string | null>(null);

  //Số bài báo
  const [paper, setPaper] = useState(0);

  //Độ tuổi
  const [age, setAge] = useState(0);


  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="overflow-hidden shadow sm:rounded-md">
          <div className="bg-white px-4 py-5 sm:p-10">
            <div className="grid grid-cols-6 gap-10">
            <div className="col-span-6 sm:col-span-12">
                <label htmlFor="level" className="block text-sm font-medium text-gray-700">
                  Trình độ
                </label>
                <select
                  name="research-focus"
                  id="research-focus"
                  autoComplete="research-focus"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  onChange={(e) => setLevel(e.target.value)}
                >
                  <option value="">Chọn trình độ...</option>
                  <option value="research">Thạc sĩ</option>
                  <option value="application">Tiến sĩ</option>
                  <option value="application">Giáo sư</option>
                </select>
                {/* <div className="flex space-x-4">
                  <div className="flex-1">
                    <RangeSlider
                      value={level}
                      min={0}
                      max={1}
                      step={0.1}
                      onChange={changeEvent => setLevel(parseFloat(changeEvent.target.value))}
                    />
                  </div>
                  <div className="flex-none w-1/8">
                    <input
                      type="number"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      value={level}
                      onChange={e => setLevel(parseFloat(e.target.value))}
                      min={0}
                      max={40}
                      step={1}
                    />
                  </div>
                </div> */}
              </div>

              <div className="col-span-6 sm:col-span-12">
                <label htmlFor="teaching-experience" className="block text-sm font-medium text-gray-700">
                  Số năm giảng dạy
                </label>
                <div className="flex space-x-4">
                  <div className="flex-1">
                    <RangeSlider
                      value={teachingexperience}
                      min={0}
                      max={40}
                      step={1}
                      onChange={changeEvent => setTeachingExperience(parseFloat(changeEvent.target.value))}
                    />
                  </div>
                  <div className="flex-none w-1/8">
                    <input
                      type="number"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      value={teachingexperience}
                      onChange={e => setTeachingExperience(parseFloat(e.target.value))}
                      min={0}
                      max={40}
                      step={1}
                    />
                  </div>
                </div>
              </div>


              <div className="col-span-6">
                <label htmlFor="research-focus" className="block text-sm font-medium text-gray-700">
                  Định hướng nghiên cứu
                </label>
                <select
                  name="research-focus"
                  id="research-focus"
                  autoComplete="research-focus"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  onChange={(e) => setResearchFocus(e.target.value)}
                >
                  <option value="">Chọn định hướng...</option>
                  <option value="research">Nghiên cứu</option>
                  <option value="application">Ứng dụng</option>
                </select>
              </div>

              <div className="col-span-6">
                <label htmlFor="teacher-field" className="block text-sm font-medium text-gray-700">
                  Lĩnh vực
                </label>
                <select
                  name="teacher-field"
                  id="teacher-field"
                  autoComplete="teacher-field"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  onChange={(e) => setTeacherField(e.target.value)}
                >
                  <option value="">Chọn lĩnh vực...</option>
                  <option value="research">Khoa học máy tính</option>
                  <option value="application">Kĩ thuật máy tính</option>
                  <option value="application">An toàn bảo mật</option>
                </select>
              </div>

              <div className="col-span-6 sm:col-span-12">
                <label htmlFor="paper" className="block text-sm font-medium text-gray-700">
                  Số bài báo
                </label>
                <div className="flex space-x-4">
                  <div className="flex-1">
                    <RangeSlider
                      value={paper}
                      min={0}
                      max={20}
                      step={1}
                      onChange={changeEvent => setPaper(parseFloat(changeEvent.target.value))}
                    />
                  </div>
                  <div className="flex-none w-1/8">
                    <input
                      type="number"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      value={paper}
                      onChange={e => setPaper(parseFloat(e.target.value))}
                      min={0}
                      max={40}
                      step={1}
                    />
                  </div>
                </div>
              </div>

              <div className="col-span-6 sm:col-span-12">
                <label htmlFor="age" className="block text-sm font-medium text-gray-700">
                  Độ tuổi
                </label>
                <div className="flex space-x-4">
                  <div className="flex-1">
                    <RangeSlider
                      value={age}
                      min={30}
                      max={70}
                      
                      step={1}
                      onChange={changeEvent => setAge(parseFloat(changeEvent.target.value))}
                    />
                  </div>
                  <div className="flex-none w-1/8">
                    <input
                      type="number"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      value={age}
                      onChange={e => setAge(parseFloat(e.target.value))}
                      min={30}
                      max={70}
                      step={1}
                    />
                  </div>
                </div>
              </div>


            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
            <button
              disabled={loading}
              type="submit"
              className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              {!loading && <>Gợi ý</>}
              {loading && <Spinner />}
            </button>
          </div>
        </div>
      </form>

      <ResultModal
          show={toggleModal}
          onClose={() => setToggleModal(false)}
        />
    </>
  );

  async function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    setLoading(true);
    setToggleModal(true);
  }
  
}
