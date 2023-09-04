import { validate as uuidValidate } from "uuid"
import { Entity } from "../../entity"
import { type } from "os"


type stubProps = {
  prop1: string
  prop2: number
}

class StubEntity extends Entity<stubProps> {}

describe("Entity unit tests", () => {
  it("should set props and id", () => {
    const props = {prop1: "valu1", prop2: 2}
    const entity = new StubEntity(props)

    expect(entity.props).toStrictEqual(props)
    expect(entity._id).not.toBeNull()
    expect(uuidValidate(entity._id)).toBeTruthy()
  })

  it("should accept a valid uuid", () => {
    const props = {prop1: "valu1", prop2: 2}
    const id = '038cb640-d8b0-40de-802c-7076aceb00f7'
    const entity = new StubEntity(props, id)

    expect(uuidValidate(entity._id)).toBeTruthy()
    expect(entity._id).toBe(id)
  })

  it("should convert a entity to a JavaScript Object", () => {
    const props = {prop1: "valu1", prop2: 2}
    const id = '038cb640-d8b0-40de-802c-7076aceb00f7'
    const entity = new StubEntity(props, id)

    expect(entity.toJSON()).toStrictEqual({
      id,
      ...props
    })
  })
})
