import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { useAppSelector } from "..";

/* interface IInstructor {
  name: string;
  avatar: string;
}

interface ILesson {
  id: string;
  title: string;
  duration: string;
  isCompleted: boolean;
  isCurrent: boolean;
  videoUrl: string;
  description: string;
}

interface IModule {
  id: string;
  title: string;
  description: string;
  isLocked: boolean;
  progress: number;
  lessons: ILesson[];
}

interface ICourse {
  id: number;
  title: string;
  description: string;
  instructor: IInstructor;
  thumbnail: string;
  totalDuration: string;
  level: string;
  tags: string[];
  modules: IModule[];
} */

export const playerSlice = createSlice({
  name: "player",
  initialState: {
    courses: [
      {
        id: 12,
        title: "Curso de Node.js",
        description: "Aprenda Node.js do básico ao avançado",
        instructor: {
          name: "Matheus Silva",
          avatar: "url-da-imagem",
        },
        thumbnail: "url-da-capa",
        totalDuration: "3h 10min",
        level: "Iniciante",
        tags: ["node", "backend", "javascript"],
        modules: [
          {
            id: "1",
            title: "Introdução ao Node",
            description: "Primeiros passos com Node.js",
            isLocked: false,
            progress: 0,
            lessons: [
              {
                id: "n1",
                title: "O que é Node.js",
                duration: "08:20",
                isCompleted: false,
                isCurrent: false,
                videoUrl: "https://youtube.com/watch?v=n1",
                description: "Entenda o funcionamento do Node.js",
              },
              {
                id: "n2",
                title: "Criando servidor HTTP",
                duration: "12:10",
                isCompleted: false,
                isCurrent: false,
                videoUrl: "https://youtube.com/watch?v=n2",
                description: "Aprenda a criar um servidor com Node",
              },
            ],
          },
          {
            id: "2",
            title: "APIs com Node",
            description: "Criando APIs REST",
            isLocked: false,
            progress: 0,
            lessons: [
              {
                id: "n3",
                title: "Rotas e controllers",
                duration: "10:45",
                isCompleted: false,
                isCurrent: false,
                videoUrl: "https://youtube.com/watch?v=n3",
                description: "Organizando rotas no Node",
              },
            ],
          },
        ],
      },
      {
        id: 11,
        title: "Curso de TypeScript",
        description: "Domine tipagem no JavaScript",
        instructor: {
          name: "Lucas Mendes",
          avatar: "url-da-imagem",
        },
        thumbnail: "url-da-capa",
        totalDuration: "2h 50min",
        level: "Intermediário",
        tags: ["typescript", "javascript"],
        modules: [
          {
            id: "1",
            title: "Fundamentos",
            description: "Introdução ao TypeScript",
            isLocked: false,
            progress: 0,
            lessons: [
              {
                id: "ts1",
                title: "Tipos básicos",
                duration: "09:30",
                isCompleted: false,
                isCurrent: false,
                videoUrl: "https://youtube.com/watch?v=ts1",
                description: "Aprenda os tipos básicos do TS",
              },
            ],
          },
          {
            id: "2",
            title: "Avançando",
            description: "Recursos avançados",
            isLocked: false,
            progress: 0,
            lessons: [
              {
                id: "ts2",
                title: "Interfaces",
                duration: "11:00",
                isCompleted: false,
                isCurrent: false,
                videoUrl: "https://youtube.com/watch?v=ts2",
                description: "Entenda interfaces no TS",
              },
            ],
          },
        ],
      },
      {
        id: 6,
        title: "Curso de Next.js",
        description: "Crie aplicações fullstack com Next.js",
        instructor: {
          name: "Fernanda Rocha",
          avatar: "url-da-imagem",
        },
        thumbnail: "url-da-capa",
        totalDuration: "3h 40min",
        level: "Avançado",
        tags: ["nextjs", "react", "fullstack"],
        modules: [
          {
            id: "1",
            title: "Introdução ao Next",
            description: "Primeiros passos",
            isLocked: false,
            progress: 0,
            lessons: [
              {
                id: "nx1",
                title: "Pages e rotas",
                duration: "10:25",
                isCompleted: false,
                isCurrent: false,
                videoUrl: "https://youtube.com/watch?v=nx1",
                description: "Entenda o sistema de rotas",
              },
            ],
          },
          {
            id: "2",
            title: "Data Fetching",
            description: "Buscando dados",
            isLocked: false,
            progress: 0,
            lessons: [
              {
                id: "nx2",
                title: "getServerSideProps",
                duration: "12:30",
                isCompleted: false,
                isCurrent: false,
                videoUrl: "https://youtube.com/watch?v=nx2",
                description: "Renderização no servidor",
              },
            ],
          },
        ],
      },
      {
        id: 5,
        title: "CSS Avançado",
        description: "Domine layouts e responsividade",
        instructor: {
          name: "Ana Costa",
          avatar: "url-da-imagem",
        },
        thumbnail: "url-da-capa",
        totalDuration: "2h 20min",
        level: "Intermediário",
        tags: ["css", "frontend", "design"],
        modules: [
          {
            id: "1",
            title: "Flexbox",
            description: "Aprenda Flexbox",
            isLocked: false,
            progress: 0,
            lessons: [
              {
                id: "css1",
                title: "Conceitos de Flexbox",
                duration: "08:50",
                isCompleted: false,
                isCurrent: false,
                videoUrl: "https://youtube.com/watch?v=css1",
                description: "Aprenda Flexbox do zero",
              },
            ],
          },
          {
            id: "2",
            title: "Grid",
            description: "CSS Grid Layout",
            isLocked: false,
            progress: 0,
            lessons: [
              {
                id: "css2",
                title: "Introdução ao Grid",
                duration: "10:40",
                isCompleted: false,
                isCurrent: false,
                videoUrl: "https://youtube.com/watch?v=css2",
                description: "Criando layouts com Grid",
              },
            ],
          },
        ],
      },
    ],
    currentCourseSelected: 0,
    currentModuleIndex: 0,
    currentLessonIndex: 0,
  },

  reducers: {
    selectCourse: (state, action: PayloadAction<number>) => {
      state.currentCourseSelected = action.payload;
    }
    /* play: (state, action: PayloadAction<[number, number]>) => {
      state.currentModuleIndex = action.payload[0];
      state.currentLessonIndex = action.payload[1];
    },
    next: (state) => {
      const nextLessonIndex = state.currentLessonIndex + 1;
      const nextLesson =
        state.course.modules[state.currentModuleIndex].lessons[nextLessonIndex];

      if (nextLesson) {
        state.currentLessonIndex = nextLessonIndex;
      } else {
        const nextModuleIndex = state.currentModuleIndex + 1;
        const nextModule = state.course.modules[nextModuleIndex];

        if (nextModule) {
          state.currentModuleIndex = nextModuleIndex;
          state.currentLessonIndex = 0;
        }
      }
    }, */
  },
});

export const player = playerSlice.reducer;
export const { selectCourse } = playerSlice.actions;

export const useCurrentLesson = () => {
  return useAppSelector((store) => {
    const { currentModuleIndex, currentLessonIndex } = store.player;

    const currentModule = store.player.course.modules[currentModuleIndex];
    const currentLesson = currentModule.lessons[currentLessonIndex];

    return { currentModule, currentLesson };
  });
};
