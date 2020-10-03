/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getDogs = /* GraphQL */ `
  query GetDogs($id: ID!) {
    getDogs(id: $id) {
      id
      dog_name
      city
      shelter_name
      age
      story
      info
      gender
      breed
      children_scale
      dogs_scale
      cats_scale
      home_scale
      activity_scale
      image_url
      createdAt
      updatedAt
    }
  }
`;
export const listDogss = /* GraphQL */ `
  query ListDogss(
    $filter: ModelDogsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDogss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        dog_name
        city
        shelter_name
        age
        story
        info
        gender
        breed
        children_scale
        dogs_scale
        cats_scale
        home_scale
        activity_scale
        image_url
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
