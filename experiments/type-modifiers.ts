interface Config {
  readonly portalUrl: string;
  readonly apiUrl: string;
}

type CreateMutable<Type> = {
  -readonly [Property in keyof Type]: Type[Property];
};

type MutableConfig = CreateMutable<Config>;
