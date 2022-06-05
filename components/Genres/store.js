// import axios from "axios";
import axios from "axios";
import create from "zustand";
// const useStore = create(set => ({
//   genres: [],
//   getGenres: async ()=> {
//     const response = await axios.get(`https://api.themoviedb.org/3/genre/list?api_key=e6ab9cb5f394d693d47a56721ddcd9a5&language=en-US`)
//     set({ genres: response.data.results })
//   },
//   addGenre: (genre) => set(state => ({ genres:[...state.genres ,genre] })),
//   removeGenre: (id) =>
//   set((state) => ({
//     genres: state.genres.filter((genre) => genre.id !== id),
//   })),
// }))

// export default useStore

const useStore = create((set) => ({
  genres: [],
  fetch: async () => {
    const response = await axios.get(
      "https://api.themoviedb.org/3/genre/list?api_key=e6ab9cb5f394d693d47a56721ddcd9a5&language=en-US"
    );
    set({ genres: await response.data.results });
  },
}));
export default useStore;

// import axios from "axios";
// import create from "zustand";

// export const useStore = create((set) => ({
//   genres: [],
//   execute:async(url)=>{
//       const response=await axios.get(url)
//       set({genres:await response.data})
//   },

//   addGenre: (genre) =>
//     set((state) => ({ genres: state.genres.concat(genre) })),

//   removeGenre: (id) =>
//     set((state) => ({
//       genres: state.genres.filter((genre) => genre.id !== id),
//     })),
// }));
