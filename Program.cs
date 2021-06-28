using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace bitcoin
{
    class Alist
    {
        public List<double[]> size { get; }
        public List<double[]> fee { get; }
        public Alist(List<double[]> size, List<double[]> fee)
        {
            this.size = size;
            this.fee = fee;
        }

    }

    class Program
    {

        static void Main(string[] args)
        {
            double[] size = new double[] { 57247, 98732, 134928, 77275, 29240, 15440, 70820, 139603, 63718, 143807, 190457, 40572 };
            double[] size2 = new double[] { 57247, 98732, 134928, 77275, 29240, 15440, 70820, 139603, 63718, 143807, 190457, 40572 };
            double[] fee = new double[] { 0.0887, 0.1856, 0.2307, 0.1522, 0.0532, 0.0250, 0.1409, 0.2541, 0.1147, 0.2660, 0.2933, 0.0686 };
            int h = 0;
            List<double> sizelist = new List<double>();
            List<double> feelist = new List<double>();

            for (int i = 0; i < size.Length; i++)
            {
                var combinationsSize = Combination.Enumerate(size, i + 1).ToList();
                var combinationsFee = Combination.Enumerate(fee, i + 1).ToList();

                foreach (var elem in combinationsSize)
                {
                    List<double> tmp = new List<double>();
                    sizelist.Add(elem.Sum());
                    //Console.WriteLine("{0} ", tmp.Select(x => x.ToString()).ToArray());
                }
                foreach (var elem in combinationsFee)
                {
                    List<double> tmp = new List<double>();
                    feelist.Add(elem.Sum());
                    //Console.WriteLine("{0} ", tmp.Select(x => x.ToString()).ToArray());
                    h++;
                }
                
                var ret = sizelist.Zip(feelist, (s, f) => new { Size = s, Fee = f });
                Console.WriteLine(ret.GetType());
                foreach (var t in ret)
                {
                    Console.WriteLine("{0} ", t.Size);
                }
                

            }

            Console.WriteLine("count:{0} ", h);

        }

        static double combination(double[] ary1, double[] ary2, int count)
        {
            double[] data1 = ary1;
            double[] data2 = ary2;
            int a = 0;
            List<double> retdata = new List<double>();
            List<double> tmpdata = new List<double>();
            retdata.Add(5555555);
            for (int i = 0; i < data1.Length; i++)
            {
                for (int e = 0; e < count; e++)
                {
                    data2 = data2.Where((source, index) => index != 0).ToArray();
                    for (int f = 0; f < data2.Length; f++)
                    {
                        a = a + 1;
                        retdata.Add(i);
                        Console.WriteLine("[{0},{1}]{2}", data1[i], data2[f],retdata[i]);
                    }
                }
            }
            Console.WriteLine("{0}", retdata[3]);
            return (1);
        }
    }
}
