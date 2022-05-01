import { getWhere } from './zen-grid-where';

describe('zen-grid', () => {
  it('should construct where variable', () => {
    const filters: any = [
      {
        field: 'published',
        operator: 'eq',
        value: true,
      },
      {
        field: 'text',
        operator: 'contains',
        value: 'sample',
      },
    ];

    const result = getWhere({ filters });

    expect(result).toEqual({
      AND: [
        {
          published: {
            equals: true,
          },
        },
        {
          text: {
            contains: 'sample',
            mode: 'insensitive',
          },
        },
      ],
    });
  });
});
