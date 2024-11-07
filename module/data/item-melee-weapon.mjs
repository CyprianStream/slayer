import SlayerItem from "./item-item.mjs";

export default class SlayerMeleeWeapon extends SlayerItem {
     static defineSchema() {
        const fields = foundry.data.fields;
        const requiredInteger = { required: true, nullable: false, integer: true };
        const schema = super.defineSchema();

        schema.range = new fields.StringField({ required: true, blank: true })
        schema.material = new fields.StringField({
            required: true,
            options: ["Steel", "Blessed Steel", "Silver", "Other"]
        }),
        schema.size = new fields.StringField({
            required: true,
            options: ["Large Weapon", "Weapon", "Sidearm"]
        }),
        schema.condition = new fields.StringField({
            required: true,
            options: ["good", "scratched", "blunted", "mangled"],
            initial: "good"
        }),
        schema.strengths = new fields.StringField({
            options: []
        })
     }
}