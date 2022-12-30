export const schemaTypes = {
  title: 'Постууд',
  name: 'post',
  type: 'document',
  fields: [
    {
      title: 'Постын гарчиг',
      name: 'title',
      type: 'string',
      description: 'Блогийн постын үндсэн гарчиг, 50 тэмдэгтээс бүү хэтрүүлээрэй',
    },
    {
      title: 'Дэд гарчиг',
      name: 'subtitle',
      type: 'string',
      description: 'Постын төрлийг текстээр бичих',
    },
    {
      title: 'Постын зураг',
      name: 'cover_image',
      type: 'image',
    },
    {
      title: 'Огноо',
      name: 'date',
      type: 'datetime',
    },
    {
      title: 'Хаяг',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',

        slugify: (input) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
    },
  ],
}
