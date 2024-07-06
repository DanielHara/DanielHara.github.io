export type IImage = {
  id: string;
  width: number;
  height: number;
  alt_description: string;
  url: string;
}

const imagePayload: IImage[] = [
    {
      "id": "O-dWPPAOgEU",
      "width": 4000,
      "height": 2250,
      "alt_description": "A man standing on top of a hill under a cloudy sky",
      "url": "https://images.unsplash.com/photo-1720188228786-e6cb3b668aef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzA0MjB8MHwxfGFsbHwxfHx8fHx8Mnx8MTcyMDI4MzE1Mnw&ixlib=rb-4.0.3&q=80&w=1080",
    },
    {
      "id": "tfUU7ocg-U4",
      "width": 5927,
      "height": 3951,
      "alt_description": "The sun is setting over the ocean with waves",
      "url": "https://images.unsplash.com/photo-1720206811364-684e8f8e803f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzA0MjB8MHwxfGFsbHwyfHx8fHx8Mnx8MTcyMDI4MzE1Mnw&ixlib=rb-4.0.3&q=80&w=1080",
    },
    {
      "id": "K_JPLwJhKdk",
      "width": 11313,
      "height": 7542,
      "alt_description": "A view of a city at night from a rooftop",
      "url": "https://images.unsplash.com/photo-1720211370947-68088964ae6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzA0MjB8MHwxfGFsbHwzfHx8fHx8Mnx8MTcyMDI4MzE1Mnw&ixlib=rb-4.0.3&q=80&w=1080",
    },
    {
      "id": "FYYA8tTgIwA",
      "width": 3508,
      "height": 5262,
      "alt_description": "A bird flying over the ocean at sunset",
      "url": "https://images.unsplash.com/photo-1720209388220-a26fbff2a64f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzA0MjB8MHwxfGFsbHw0fHx8fHx8Mnx8MTcyMDI4MzE1Mnw&ixlib=rb-4.0.3&q=80&w=1080",
    },
    {
      "id": "yMenHxhmMOQ",
      "width": 2667,
      "height": 4000,
      "alt_description": "Some random alt description",
      "url": "https://images.unsplash.com/photo-1720247521923-f531207d23d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzA0MjB8MHwxfGFsbHw1fHx8fHx8Mnx8MTcyMDI4MzE1Mnw&ixlib=rb-4.0.3&q=80&w=1080",
    },
    {
      "id": "7lg_wvn71eQ",
      "width": 4000,
      "height": 2667,
      "alt_description": "An orange van parked in front of a white building",
      "url": "https://images.unsplash.com/photo-1720247522689-d851331da090?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzA0MjB8MHwxfGFsbHw2fHx8fHx8Mnx8MTcyMDI4MzE1Mnw&ixlib=rb-4.0.3&q=80&w=1080",
    },
    {
      "id": "aNY0nGDcNtM",
      "width": 2667,
      "height": 4000,
      "alt_description": "A boat that is sitting on the ground",
      "url": "https://images.unsplash.com/photo-1720247522931-3fad6952f593?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzA0MjB8MHwxfGFsbHw3fHx8fHx8Mnx8MTcyMDI4MzE1Mnw&ixlib=rb-4.0.3&q=80&w=1080",
    },
    {
      "id": "kc4xk_N2iqA",
      "width": 3843,
      "height": 5765,
      "alt_description": "A person pouring orange juice into a glass",
      "url": "https://images.unsplash.com/photo-1719934664950-5bd22f04b8a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzA0MjB8MHwxfGFsbHw4fHx8fHx8Mnx8MTcyMDI4MzE1Mnw&ixlib=rb-4.0.3&q=80&w=1080",
    },
    {
      "id": "l66vULdtnvg",
      "width": 2667,
      "height": 4000,
      "alt_description": "A group of people sitting under umbrellas on a sidewalk",
      "url": "https://images.unsplash.com/photo-1720247522944-f59d490e71cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzA0MjB8MHwxfGFsbHw5fHx8fHx8Mnx8MTcyMDI4MzE1Mnw&ixlib=rb-4.0.3&q=80&w=1080",
    },
    {
      "id": "fuo3BEM_kPc",
      "width": 2667,
      "height": 4000,
      "alt_description": "A group of people sitting under umbrellas in front of a building",
      "url": "https://images.unsplash.com/photo-1720247524001-46a6ec33c60b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzA0MjB8MHwxfGFsbHwxMHx8fHx8fDJ8fDE3MjAyODMxNTJ8&ixlib=rb-4.0.3&q=80&w=1080",
    }
  ]

// TODO: create my own pictures API
export const getPictureLoad = () => {
  return new Promise<IImage[]>((resolve) => {
    setTimeout(() => {
      resolve(imagePayload);
    }, 500);
  });
};
