import type { RouteRecordRaw } from "vue-router";
import ListDatatable from "./ListDatatable.vue";
import FormUpdateData from "./FormUpdateData.vue";

export const discountRoute: RouteRecordRaw = {
  path: "discount",
  children: [
    {
      path: "",
      name: "discount",
      component: ListDatatable,
    },
    {
      path: "create",
      name: "discount.create",
      component: FormUpdateData,
    },
    {
      path: ":id",
      name: "discount.edit",
      component: FormUpdateData,
      props: true,
    },
  ],
};

/* 
model Discount {
  id   Int       @id @db.UnsignedInt @default(autoincrement())
  
  name String
  type DiscountType
  percentage Decimal?
  amount Decimal?

  is_stackable  Boolean   @default(false)
  priority      Int       @default(100)
  max_discount  Decimal?

  apply_to      DiscountApplyTo

  is_active Boolean @default(true)

  start_at DateTime
  end_at DateTime?

  created_at  DateTime  @default(now())
  updated_at  DateTime  @default(now()) @updatedAt

  condition DiscountCondition[]
}

model DiscountCondition {
  id   Int       @id @db.UnsignedInt @default(autoincrement())

  discountId Int @db.UnsignedInt
  productId Int @db.UnsignedInt
  min_quantity Int

  created_at  DateTime  @default(now())
  updated_at  DateTime  @default(now()) @updatedAt

  discount Discount @relation(fields: [discountId], references: [id])
  product Product @relation(fields: [productId], references: [id])

  @@unique([discountId, productId])
}


model Tax {
  id   Int       @id @db.UnsignedInt @default(autoincrement())
  total Decimal
}
*/
