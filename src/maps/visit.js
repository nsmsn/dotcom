import { Tree } from "@weborigami/async-tree";

// Gets the deep values from the indicated tree
export default async function visit(treelike) {
  const tree = Tree.from(treelike);
  const keys = Array.from(await tree.keys());
  const promises = keys.map(async (key) => {
    const value = await tree.get(key);
    if (Tree.isAsyncTree(value)) {
      await visit(value);
    }
  });
  await Promise.all(promises);
}
