/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTodo = /* GraphQL */ `
  subscription OnCreateTodo($createdBy: String) {
    onCreateTodo(createdBy: $createdBy) {
      id
      name
      description
      categories {
        items {
          id
          name
          description
          createdBy
          createdAt
          updatedAt
          todoCategoriesId
        }
        nextToken
      }
      isComplete
      createdBy
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTodo = /* GraphQL */ `
  subscription OnUpdateTodo($createdBy: String) {
    onUpdateTodo(createdBy: $createdBy) {
      id
      name
      description
      categories {
        items {
          id
          name
          description
          createdBy
          createdAt
          updatedAt
          todoCategoriesId
        }
        nextToken
      }
      isComplete
      createdBy
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTodo = /* GraphQL */ `
  subscription OnDeleteTodo($createdBy: String) {
    onDeleteTodo(createdBy: $createdBy) {
      id
      name
      description
      categories {
        items {
          id
          name
          description
          createdBy
          createdAt
          updatedAt
          todoCategoriesId
        }
        nextToken
      }
      isComplete
      createdBy
      createdAt
      updatedAt
    }
  }
`;
export const onCreateCategory = /* GraphQL */ `
  subscription OnCreateCategory($createdBy: String) {
    onCreateCategory(createdBy: $createdBy) {
      id
      name
      description
      createdBy
      createdAt
      updatedAt
      todoCategoriesId
    }
  }
`;
export const onUpdateCategory = /* GraphQL */ `
  subscription OnUpdateCategory($createdBy: String) {
    onUpdateCategory(createdBy: $createdBy) {
      id
      name
      description
      createdBy
      createdAt
      updatedAt
      todoCategoriesId
    }
  }
`;
export const onDeleteCategory = /* GraphQL */ `
  subscription OnDeleteCategory($createdBy: String) {
    onDeleteCategory(createdBy: $createdBy) {
      id
      name
      description
      createdBy
      createdAt
      updatedAt
      todoCategoriesId
    }
  }
`;
