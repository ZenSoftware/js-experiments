export function getOperator(filter: any) {
  const operator: any = {};

  let value;
  if (typeof filter.value === 'string') value = filter.value.toLowerCase();
  else value = filter.value;

  switch (filter.operator) {
    case 'eq':
      operator['equals'] = value;
      break;
    case 'neq':
      operator['not'] = { equals: value };
      break;
    case 'isnull':
      operator['equals'] = null;
      break;
    case 'isnotnull':
      operator['not'] = { equals: null };
      break;
    case 'lt':
      operator['lt'] = value;
      break;
    case 'lte':
      operator['lte'] = value;
      break;
    case 'gt':
      operator['gt'] = value;
      break;
    case 'gte':
      operator['gte'] = value;
      break;
    case 'startswith':
      operator['startsWith'] = value;
      break;
    case 'endswith':
      operator['endsWith'] = value;
      break;
    case 'contains':
      operator['contains'] = value;
      break;
    case 'doesnotcontain':
      operator['not'] = { contains: value };
      break;
    case 'isempty':
      operator['equals'] = '';
      break;
    case 'isnotempty':
      operator['not'] = { equals: '' };
      break;
  }

  return operator;
}

export function getWhere(filter: any) {
  const filters = filter.filters;
  if (filters) {
    const where = [];
    for (const filter of filters) {
      const fieldSplit = (<string>filter.field).split('.');
      let next: any = {};
      const f = next;

      for (let i = 0; i < fieldSplit.length; i++) {
        if (i === fieldSplit.length - 1) {
          next[fieldSplit[i]] = getOperator(filter);
          if (typeof filter.value === 'string') next[fieldSplit[i]]['mode'] = 'insensitive';
        } else {
          next[fieldSplit[i]] = {};
          next = next[fieldSplit[i]];
        }
      }

      where.push(f);
    }

    if (where.length === 1) {
      return where[0];
    } else if (where.length > 1) {
      if (filter?.logic === 'or') return { OR: where };
      else return { AND: where };
    }
  }
}
