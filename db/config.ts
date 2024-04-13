import { defineDb, defineTable, column, NOW } from 'astro:db';

const User = defineTable({
  columns: {
    id: column.text({primaryKey: true}),
    email: column.text({unique:true}),
    hashed_password: column.text(),
    createdAt: column.date({default: NOW}),
  }
})

const Session = defineTable({
  columns: {
    id: column.text({primaryKey: true}),
    userId: column.text({references: () => User.columns.id }),
    expiresAt: column.date(),
  }
})


// https://astro.build/db/config
export default defineDb({
  tables: {User, Session}
});
