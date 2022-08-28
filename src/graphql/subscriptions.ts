/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTodo = /* GraphQL */ `
  subscription OnCreateTodo($filter: ModelSubscriptionTodoFilterInput) {
    onCreateTodo(filter: $filter) {
      id
      name
      description
      categories {
        items {
          id
          name
          description
          createdAt
          updatedAt
          todoCategoriesId
        }
        nextToken
      }
      isComplete
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTodo = /* GraphQL */ `
  subscription OnUpdateTodo($filter: ModelSubscriptionTodoFilterInput) {
    onUpdateTodo(filter: $filter) {
      id
      name
      description
      categories {
        items {
          id
          name
          description
          createdAt
          updatedAt
          todoCategoriesId
        }
        nextToken
      }
      isComplete
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTodo = /* GraphQL */ `
  subscription OnDeleteTodo($filter: ModelSubscriptionTodoFilterInput) {
    onDeleteTodo(filter: $filter) {
      id
      name
      description
      categories {
        items {
          id
          name
          description
          createdAt
          updatedAt
          todoCategoriesId
        }
        nextToken
      }
      isComplete
      createdAt
      updatedAt
    }
  }
`;
export const onCreateCategory = /* GraphQL */ `
  subscription OnCreateCategory($filter: ModelSubscriptionCategoryFilterInput) {
    onCreateCategory(filter: $filter) {
      id
      name
      description
      createdAt
      updatedAt
      todoCategoriesId
    }
  }
`;
export const onUpdateCategory = /* GraphQL */ `
  subscription OnUpdateCategory($filter: ModelSubscriptionCategoryFilterInput) {
    onUpdateCategory(filter: $filter) {
      id
      name
      description
      createdAt
      updatedAt
      todoCategoriesId
    }
  }
`;
export const onDeleteCategory = /* GraphQL */ `
  subscription OnDeleteCategory($filter: ModelSubscriptionCategoryFilterInput) {
    onDeleteCategory(filter: $filter) {
      id
      name
      description
      createdAt
      updatedAt
      todoCategoriesId
    }
  }
`;
