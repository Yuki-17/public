using System;
using System.Collections.Generic;
using System.Linq;

namespace bitcoin
{
    public static class Combination
    {
        public static IEnumerable<T[]> Enumerate<T>(IEnumerable<T> items, int k)
        {
            if (k == 1)
            {
                foreach (var item in items)
                    yield return new T[] { item };
                yield break;
            }
            foreach (var item in items)
            {
                var leftside = new T[] { item };
                var unused = items.SkipWhile(e => !e.Equals(item)).Skip(1).ToList();

                foreach (var rightside in Enumerate(unused, k - 1))
                {
                    yield return leftside.Concat(rightside).ToArray();
                }
            }
        }
    }
}
