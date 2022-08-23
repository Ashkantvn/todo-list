export interface props {
  children: JSX.Element;
}

export interface contextInterface {
  contextValue: { notes: string[] };
  setContextValue: React.Dispatch<
    React.SetStateAction<{ notes: string[] }>
  >;
}
