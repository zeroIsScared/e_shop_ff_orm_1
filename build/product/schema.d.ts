import { Static } from "@sinclair/typebox";
export declare const ProductRequest: import("@sinclair/typebox").TObject<{
    name: import("@sinclair/typebox").TString;
    amount: import("@sinclair/typebox").TNumber;
    currency: import("@sinclair/typebox").TString;
}>;
export declare const ProductReply: import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TNumber;
    name: import("@sinclair/typebox").TNumber;
    price: import("@sinclair/typebox").TObject<{
        amount: import("@sinclair/typebox").TNumber;
        currency: import("@sinclair/typebox").TString;
    }>;
}>;
export type ProductRequestType = Static<typeof ProductRequest>;
export type ProductReplyType = Static<typeof ProductReply>;
