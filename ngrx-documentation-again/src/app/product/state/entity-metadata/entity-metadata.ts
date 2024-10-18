import { EntityMetadataMap } from "@ngrx/data";
import { Product } from "../models/product.model";

const entityMetadata: EntityMetadataMap = {
  Product: {
    selectId: (product: Product) => product.id,
  },
};

export const entityConfig = {
  entityMetadata,
};
