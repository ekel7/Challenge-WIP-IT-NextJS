import { Author, Film, Films } from "../types/types";
import { authorList } from "../data/authors";

export function shuffleArray<Type>(array: Type[]): Type[] {
  const arrayCopy = [...array];
  for (var i = arrayCopy.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = arrayCopy[i];
    arrayCopy[i] = arrayCopy[j];
    arrayCopy[j] = temp;
  }
  return arrayCopy;
}

export function duplicateElement(array: Films, id: string): Films {
  const arrayCopy = [...array];
  const element: any = arrayCopy.find((e) => e.id === id);

  arrayCopy.push(element);

  return arrayCopy;
}

export function authorChange(array: Films, authorId: string, id: string) {
  let arrayCopy = [...array];

  let itemIndex = arrayCopy.findIndex((item) => item.id === id);

  let newAuthor: any = authorList.find((item) => item.id == authorId);

  arrayCopy[itemIndex].author = newAuthor;

  return arrayCopy;
}

export function changeRate(array: Films){
     let arrayCopy = [...array]; 
     let itemIndex1 =  Math.floor(Math.random() * 7);
     let itemIndex2 =  Math.floor(Math.random() * 7);
     
     arrayCopy[itemIndex1].rate = Math.floor(Math.random() * 10);
     arrayCopy[itemIndex2].rate = Math.floor(Math.random() * 10);
     
          
    return arrayCopy;
}