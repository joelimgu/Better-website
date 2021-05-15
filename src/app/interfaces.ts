
interface Iskill {
name:string,
image_path:string,
alt:string
}


interface IProject {
    _id: {ObjectId},
    preview: {
      title: string,
      image: string
      skills: Array<{string}>
    },
    article: Array<{
      title?:string,
      text?:string,
      image?:string
    }>
  }


export {Iskill, IProject}