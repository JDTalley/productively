/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateTodoInput = {
  id?: string | null,
  name: string,
  description?: string | null,
  isComplete?: boolean | null,
  createdBy?: string | null,
};

export type ModelTodoConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  isComplete?: ModelBooleanInput | null,
  createdBy?: ModelStringInput | null,
  and?: Array< ModelTodoConditionInput | null > | null,
  or?: Array< ModelTodoConditionInput | null > | null,
  not?: ModelTodoConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Todo = {
  __typename: "Todo",
  id: string,
  name: string,
  description?: string | null,
  categories?: ModelCategoryConnection | null,
  isComplete?: boolean | null,
  createdBy?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelCategoryConnection = {
  __typename: "ModelCategoryConnection",
  items:  Array<Category | null >,
  nextToken?: string | null,
};

export type Category = {
  __typename: "Category",
  id: string,
  name: string,
  description?: string | null,
  createdBy?: string | null,
  createdAt: string,
  updatedAt: string,
  todoCategoriesId?: string | null,
};

export type UpdateTodoInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  isComplete?: boolean | null,
  createdBy?: string | null,
};

export type DeleteTodoInput = {
  id: string,
};

export type CreateCategoryInput = {
  id?: string | null,
  name: string,
  description?: string | null,
  createdBy?: string | null,
  todoCategoriesId?: string | null,
};

export type ModelCategoryConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  createdBy?: ModelStringInput | null,
  and?: Array< ModelCategoryConditionInput | null > | null,
  or?: Array< ModelCategoryConditionInput | null > | null,
  not?: ModelCategoryConditionInput | null,
  todoCategoriesId?: ModelIDInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateCategoryInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  createdBy?: string | null,
  todoCategoriesId?: string | null,
};

export type DeleteCategoryInput = {
  id: string,
};

export type ModelTodoFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  isComplete?: ModelBooleanInput | null,
  createdBy?: ModelStringInput | null,
  and?: Array< ModelTodoFilterInput | null > | null,
  or?: Array< ModelTodoFilterInput | null > | null,
  not?: ModelTodoFilterInput | null,
};

export type ModelTodoConnection = {
  __typename: "ModelTodoConnection",
  items:  Array<Todo | null >,
  nextToken?: string | null,
};

export type ModelCategoryFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  createdBy?: ModelStringInput | null,
  and?: Array< ModelCategoryFilterInput | null > | null,
  or?: Array< ModelCategoryFilterInput | null > | null,
  not?: ModelCategoryFilterInput | null,
  todoCategoriesId?: ModelIDInput | null,
};

export type CreateTodoMutationVariables = {
  input: CreateTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type CreateTodoMutation = {
  createTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    categories?:  {
      __typename: "ModelCategoryConnection",
      items:  Array< {
        __typename: "Category",
        id: string,
        name: string,
        description?: string | null,
        createdBy?: string | null,
        createdAt: string,
        updatedAt: string,
        todoCategoriesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    isComplete?: boolean | null,
    createdBy?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTodoMutationVariables = {
  input: UpdateTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type UpdateTodoMutation = {
  updateTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    categories?:  {
      __typename: "ModelCategoryConnection",
      items:  Array< {
        __typename: "Category",
        id: string,
        name: string,
        description?: string | null,
        createdBy?: string | null,
        createdAt: string,
        updatedAt: string,
        todoCategoriesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    isComplete?: boolean | null,
    createdBy?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTodoMutationVariables = {
  input: DeleteTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type DeleteTodoMutation = {
  deleteTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    categories?:  {
      __typename: "ModelCategoryConnection",
      items:  Array< {
        __typename: "Category",
        id: string,
        name: string,
        description?: string | null,
        createdBy?: string | null,
        createdAt: string,
        updatedAt: string,
        todoCategoriesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    isComplete?: boolean | null,
    createdBy?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCategoryMutationVariables = {
  input: CreateCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type CreateCategoryMutation = {
  createCategory?:  {
    __typename: "Category",
    id: string,
    name: string,
    description?: string | null,
    createdBy?: string | null,
    createdAt: string,
    updatedAt: string,
    todoCategoriesId?: string | null,
  } | null,
};

export type UpdateCategoryMutationVariables = {
  input: UpdateCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type UpdateCategoryMutation = {
  updateCategory?:  {
    __typename: "Category",
    id: string,
    name: string,
    description?: string | null,
    createdBy?: string | null,
    createdAt: string,
    updatedAt: string,
    todoCategoriesId?: string | null,
  } | null,
};

export type DeleteCategoryMutationVariables = {
  input: DeleteCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type DeleteCategoryMutation = {
  deleteCategory?:  {
    __typename: "Category",
    id: string,
    name: string,
    description?: string | null,
    createdBy?: string | null,
    createdAt: string,
    updatedAt: string,
    todoCategoriesId?: string | null,
  } | null,
};

export type GetTodoQueryVariables = {
  id: string,
};

export type GetTodoQuery = {
  getTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    categories?:  {
      __typename: "ModelCategoryConnection",
      items:  Array< {
        __typename: "Category",
        id: string,
        name: string,
        description?: string | null,
        createdBy?: string | null,
        createdAt: string,
        updatedAt: string,
        todoCategoriesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    isComplete?: boolean | null,
    createdBy?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTodosQueryVariables = {
  filter?: ModelTodoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTodosQuery = {
  listTodos?:  {
    __typename: "ModelTodoConnection",
    items:  Array< {
      __typename: "Todo",
      id: string,
      name: string,
      description?: string | null,
      categories?:  {
        __typename: "ModelCategoryConnection",
        nextToken?: string | null,
      } | null,
      isComplete?: boolean | null,
      createdBy?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCategoryQueryVariables = {
  id: string,
};

export type GetCategoryQuery = {
  getCategory?:  {
    __typename: "Category",
    id: string,
    name: string,
    description?: string | null,
    createdBy?: string | null,
    createdAt: string,
    updatedAt: string,
    todoCategoriesId?: string | null,
  } | null,
};

export type ListCategoriesQueryVariables = {
  filter?: ModelCategoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCategoriesQuery = {
  listCategories?:  {
    __typename: "ModelCategoryConnection",
    items:  Array< {
      __typename: "Category",
      id: string,
      name: string,
      description?: string | null,
      createdBy?: string | null,
      createdAt: string,
      updatedAt: string,
      todoCategoriesId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateTodoSubscriptionVariables = {
  createdBy?: string | null,
};

export type OnCreateTodoSubscription = {
  onCreateTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    categories?:  {
      __typename: "ModelCategoryConnection",
      items:  Array< {
        __typename: "Category",
        id: string,
        name: string,
        description?: string | null,
        createdBy?: string | null,
        createdAt: string,
        updatedAt: string,
        todoCategoriesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    isComplete?: boolean | null,
    createdBy?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTodoSubscriptionVariables = {
  createdBy?: string | null,
};

export type OnUpdateTodoSubscription = {
  onUpdateTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    categories?:  {
      __typename: "ModelCategoryConnection",
      items:  Array< {
        __typename: "Category",
        id: string,
        name: string,
        description?: string | null,
        createdBy?: string | null,
        createdAt: string,
        updatedAt: string,
        todoCategoriesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    isComplete?: boolean | null,
    createdBy?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTodoSubscriptionVariables = {
  createdBy?: string | null,
};

export type OnDeleteTodoSubscription = {
  onDeleteTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    categories?:  {
      __typename: "ModelCategoryConnection",
      items:  Array< {
        __typename: "Category",
        id: string,
        name: string,
        description?: string | null,
        createdBy?: string | null,
        createdAt: string,
        updatedAt: string,
        todoCategoriesId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    isComplete?: boolean | null,
    createdBy?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCategorySubscriptionVariables = {
  createdBy?: string | null,
};

export type OnCreateCategorySubscription = {
  onCreateCategory?:  {
    __typename: "Category",
    id: string,
    name: string,
    description?: string | null,
    createdBy?: string | null,
    createdAt: string,
    updatedAt: string,
    todoCategoriesId?: string | null,
  } | null,
};

export type OnUpdateCategorySubscriptionVariables = {
  createdBy?: string | null,
};

export type OnUpdateCategorySubscription = {
  onUpdateCategory?:  {
    __typename: "Category",
    id: string,
    name: string,
    description?: string | null,
    createdBy?: string | null,
    createdAt: string,
    updatedAt: string,
    todoCategoriesId?: string | null,
  } | null,
};

export type OnDeleteCategorySubscriptionVariables = {
  createdBy?: string | null,
};

export type OnDeleteCategorySubscription = {
  onDeleteCategory?:  {
    __typename: "Category",
    id: string,
    name: string,
    description?: string | null,
    createdBy?: string | null,
    createdAt: string,
    updatedAt: string,
    todoCategoriesId?: string | null,
  } | null,
};
