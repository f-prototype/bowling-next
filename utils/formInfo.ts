export const props = [
  {
    name: 'name' as keyof Inputs,
    required: true,
    maxLength: 20,
    type: 'text',
    placeholder: 'Имя',
  },
  {
    name: 'tel' as keyof Inputs,
    required: true,
    maxLength: 20,
    pattern:
      '^(\\+)?((\\d{2,3}) ?\\d|\\d)(([ -]?\\d)|( ?(\\d{2,3}) ?)){5,12}\\d$',
    type: 'text',
    placeholder: 'Телефон',
  },
  {
    name: 'quantity' as keyof Inputs,
    required: true,
    pattern: '^[1-4]$',
    type: 'text',
    placeholder: 'Кол-во дорожек',
  },
  {
    name: 'date' as keyof Inputs,
    required: true,
    type: 'datetime-local',
  },
];

export const nameTel = [
  {
    name: 'name' as keyof Inputs,
    required: true,
    maxLength: 20,
    type: 'text',
    placeholder: 'Имя',
  },
  {
    name: 'tel' as keyof Inputs,
    required: true,
    maxLength: 20,
    pattern:
      '^(\\+)?((\\d{2,3}) ?\\d|\\d)(([ -]?\\d)|( ?(\\d{2,3}) ?)){5,12}\\d$',
    type: 'text',
    placeholder: 'Телефон',
  },
];

export const nameTelQuantity = [
  {
    name: 'name' as keyof Inputs,
    required: true,
    maxLength: 20,
    type: 'text',
    placeholder: 'Имя',
  },
  {
    name: 'tel' as keyof Inputs,
    required: true,
    maxLength: 20,
    pattern:
      '^(\\+)?((\\d{2,3}) ?\\d|\\d)(([ -]?\\d)|( ?(\\d{2,3}) ?)){5,12}\\d$',
    type: 'text',
    placeholder: 'Телефон',
  },
  {
    name: 'quantity' as keyof Inputs,
    required: true,
    maxLength: 3,
    pattern: '^(60|120|180|240)$',
    type: 'text',
    placeholder: 'Кол-во минут',
  },
];
