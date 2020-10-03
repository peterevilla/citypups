/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createDogs = /* GraphQL */ `
  mutation CreateDogs(
    $input: CreateDogsInput!
    $condition: ModelDogsConditionInput
  ) {
    createDogs(input: $input, condition: $condition) {
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
export const updateDogs = /* GraphQL */ `
  mutation UpdateDogs(
    $input: UpdateDogsInput!
    $condition: ModelDogsConditionInput
  ) {
    updateDogs(input: $input, condition: $condition) {
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
export const deleteDogs = /* GraphQL */ `
  mutation DeleteDogs(
    $input: DeleteDogsInput!
    $condition: ModelDogsConditionInput
  ) {
    deleteDogs(input: $input, condition: $condition) {
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
