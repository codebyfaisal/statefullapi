const sessionIdUserMap = new Map();

const setUser = (session, id) => {
  sessionIdUserMap.set(session, id);
};
const getUser = (id) => {
  return sessionIdUserMap.get(id);
};

export { setUser, getUser };
