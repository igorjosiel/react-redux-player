import { useDispatch } from "react-redux";
import { useAppSelector } from "../store";
import { selectCourse } from "../store/slices/player";

function Dashboard() {
  const dispatch = useDispatch();
  
  const courses = useAppSelector((store) => {
    return store.player.courses;
  });

  const handleCourseClick = (courseId: number) => {
    dispatch(selectCourse(courseId));
  }

  return (
    <main className="bg-sky-50 h-full md:h-screen w-full lg:px-15 px-5">
      <h1 className="text-2xl font-bold text-gray-600 mb-4">Meus cursos</h1>

      <ul className="flex flex-col lg:flex-row gap-4">
        {courses.map((course) => {
          return (
            <li
              key={course.id}
              className="lg:w-1/2 p-5 rounded-lg bg-white shadow-md h-45"
            >
              <div className="flex-1">
                <h2 className="font-bold text-lg text-gray-600 pb-3">
                  {course.title}
                </h2>

                <p className="text-sm text-gray-700">{course.description}</p>

                <a
                  href="#"
                  className="inline-block bg-blue-600 text-white text-xs font-bold px-2 py-1 mt-2 rounded"
                >
                  {course.level}
                </a>
              </div>

              <button
                className="bg-blue-500 text-white text-sm font-bold w-40 mt-4 py-2 px-4 rounded cursor-pointer hover:bg-blue-700
          transition-all ease-in"
              onClick={() => handleCourseClick(course.id)}
              >
                Ver mais
              </button>
            </li>
          );
        })}
      </ul>
    </main>
  );
}

export default Dashboard;
