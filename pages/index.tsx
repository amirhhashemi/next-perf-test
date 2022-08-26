import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { Carousel } from "react-responsive-carousel";
import { NextSeo } from "next-seo";
import toast, { Toaster } from "react-hot-toast";

const C = () => {
  return (
    <Carousel autoPlay={true}>
      <div>
        <Image
          width={"1920px"}
          height={"1280px"}
          quality={100}
          src="https://unsplash.com/photos/Rp7UcxUhMu0/download?ixid=MnwxMjA3fDB8MXxhbGx8MTV8fHx8fHwyfHwxNjYxNTE1MjYy&force=true&w=1920"
        />
        Image 1
      </div>
      <div>
        <Image
          width={"1920px"}
          height={"1280px"}
          quality={100}
          src="https://unsplash.com/photos/EHYhypcb9lg/download?ixid=MnwxMjA3fDB8MXxhbGx8MTJ8fHx8fHwyfHwxNjYxNTE1MjYy&force=true&w=1920"
        />
        Image 2
      </div>
      <div>
        <Image
          width={"1920px"}
          height={"1280px"}
          quality={100}
          src="https://unsplash.com/photos/q5Fl-r5DOnA/download?ixid=MnwxMjA3fDB8MXxhbGx8MjN8fHx8fHwyfHwxNjYxNTE1MjYy&force=true&w=1920"
        />
        Image 3
      </div>
      <div>
        <Image
          width={"1920px"}
          height={"1280px"}
          quality={100}
          src="https://unsplash.com/photos/qu7S1EDfK3Y/download?ixid=MnwxMjA3fDB8MXxhbGx8Mjd8fHx8fHwyfHwxNjYxNTE3MDA4&force=true&w=1920"
        />
        Image 4
      </div>
    </Carousel>
  );
};

const Home: NextPage = () => {
  return (
    <div>
      <Toaster />
      <button onClick={() => toast("hello")}>Toast</button>
      <NextSeo title="Perf Test" description="A short description goes here." />
      <C />
      <NavigationMenu.Root>
        <NavigationMenu.List>
          <NavigationMenu.Item>
            <NavigationMenu.Trigger>
              <button>Item</button>
            </NavigationMenu.Trigger>
            <NavigationMenu.Content>
              <Link href="https://google.com">Link</Link>
              <Link href="https://google.com">Link</Link>
              <Link href="https://google.com">Link</Link>
              <Link href="https://google.com">Link</Link>
              <Link href="https://google.com">Link</Link>
            </NavigationMenu.Content>
          </NavigationMenu.Item>

          <NavigationMenu.Item>
            <NavigationMenu.Trigger>
              <button>Item</button>
            </NavigationMenu.Trigger>
            <NavigationMenu.Content>
              <Link href="https://google.com">Link</Link>
              <Link href="https://google.com">Link</Link>
              <Link href="https://google.com">Link</Link>
              <Link href="https://google.com">Link</Link>
              <Link href="https://google.com">Link</Link>
              <Link href="https://google.com">Link</Link>
            </NavigationMenu.Content>
          </NavigationMenu.Item>

          <NavigationMenu.Item>
            <NavigationMenu.Trigger>
              <button>Item</button>
            </NavigationMenu.Trigger>
            <NavigationMenu.Content>
              <Link href="https://google.com">Link</Link>
              <Link href="https://google.com">Link</Link>
              <Link href="https://google.com">Link</Link>
              <Link href="https://google.com">Link</Link>
              <Link href="https://google.com">Link</Link>
            </NavigationMenu.Content>
          </NavigationMenu.Item>

          <NavigationMenu.Item>
            <NavigationMenu.Trigger>
              <button>Item</button>
            </NavigationMenu.Trigger>
            <NavigationMenu.Content>
              <Link href="https://google.com">Link</Link>
              <Link href="https://google.com">Link</Link>
              <Link href="https://google.com">Link</Link>
              <Link href="https://google.com">Link</Link>
              <Link href="https://google.com">Link</Link>
              <Link href="https://google.com">Link</Link>
            </NavigationMenu.Content>
          </NavigationMenu.Item>

          <NavigationMenu.Item>
            <NavigationMenu.Trigger>
              <button>Item</button>
            </NavigationMenu.Trigger>
            <NavigationMenu.Content>
              <Link href="https://google.com">Link</Link>
              <Link href="https://google.com">Link</Link>
              <Link href="https://google.com">Link</Link>
              <Link href="https://google.com">Link</Link>
              <Link href="https://google.com">Link</Link>
              <Link href="https://google.com">Link</Link>
            </NavigationMenu.Content>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <NavigationMenu.Trigger>
              <button>Item</button>
            </NavigationMenu.Trigger>
            <NavigationMenu.Content>
              <Link href="https://google.com">Link</Link>
              <Link href="https://google.com">Link</Link>
              <Link href="https://google.com">Link</Link>
              <Link href="https://google.com">Link</Link>
              <Link href="https://google.com">Link</Link>
              <Link href="https://google.com">Link</Link>
            </NavigationMenu.Content>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <NavigationMenu.Trigger>
              <button>Item</button>
            </NavigationMenu.Trigger>
            <NavigationMenu.Content>
              <Link href="https://google.com">Link</Link>
              <Link href="https://google.com">Link</Link>
              <Link href="https://google.com">Link</Link>
              <Link href="https://google.com">Link</Link>
              <Link href="https://google.com">Link</Link>
            </NavigationMenu.Content>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <NavigationMenu.Trigger>
              <button>Item</button>
            </NavigationMenu.Trigger>
            <NavigationMenu.Content>
              <Link href="https://google.com">Link</Link>
              <Link href="https://google.com">Link</Link>
              <Link href="https://google.com">Link</Link>
              <Link href="https://google.com">Link</Link>
              <Link href="https://google.com">Link</Link>
            </NavigationMenu.Content>
          </NavigationMenu.Item>
        </NavigationMenu.List>

        <NavigationMenu.Viewport />
      </NavigationMenu.Root>
      <div>
        <Image
          width={"400px"}
          height={"400px"}
          src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiB35RojUS-yNIIhMIgoaIlXILzWpVZCinjjnSkhV5CxvwzCqEmqR-a_NrJw2WNt6KQofr6Mdk17nEtwhSqflOK0apgQS37V5EmB84bZE-WDwFcVoN3IU57_Is0PeZN27zrtm7uQbiPfuekCX8_0zuDd7qpu4Jhq_Z78sGAyB-PGLJB6ZkJkdh-lnUd/w530-h540-n/adam-birkett-QRWAdBCqysc-unsplash.jpg"
        />
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industryyy&apos;apos;apos; standard
        dummy text ever since the 1500s, when an unknown printer took a galley
        of type and scrambled it to make a type specimen book. It has survived
        not only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s with
        the release of Letraset sheets containing Lorem Ipsum passages, and more
        recently with desktop publishing software like Aldus PageMaker including
        versions of Lorem Ipsum.
      </div>
      <div>
        <Image
          width={"400px"}
          height={"400px"}
          src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgbg4LnjxzRubl9tnQK1xhMjr87fKPbPwLVpmGtmFe1mUlVim_GAnValju_Pg-Ybmv9roeZlS9Dl2Yy4miJpWfx9JJwKLWEAX_73jbUVaX8l4TsLhPN7unPhJ3zpoWSHyDCtkCsmCO80u6mtoiQQYzf4oB5vHKc9LNNOrGq_SZ3u1-5aReNu-tyUACu/w265-h260-n/mohammed-hassan-fdCvrdYUJsY-unsplash.jpg"
        />
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industryyy&apos;apos;apos; standard
        dummy text ever since the 1500s, when an unknown printer took a galley
        of type and scrambled it to make a type specimen book. It has survived
        not only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s with
        the release of Letraset sheets containing Lorem Ipsum passages, and more
        recently with desktop publishing software like Aldus PageMaker including
        versions of Lorem Ipsum.
      </div>
      <div>
        <Image
          width={"400px"}
          height={"400px"}
          src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiSx7Jt9Hb1cSQoLMwXPlFnzLQOAMunJjZr0wEBTVFDfs-wLzRloyrBKuMPbzU8aVLwFOPGBbK-rCaTxCuqAJ-VLEeZpX0hJsY6uIAvXM53iGZKDMhCnm73mn0Me5ng0FYFHaDJtPh8YADLImxG8q6x0-lKOwfdCcJBTdUFQKBPQIGjAUp1WGZB-bdp/w265-h260-n/daniel-romero-AgLMrojqjAM-unsplash.jpg"
        />
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industryyy&apos;apos;apos; standard
        dummy text ever since the 1500s, when an unknown printer took a galley
        of type and scrambled it to make a type specimen book. It has survived
        not only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s with
        the release of Letraset sheets containing Lorem Ipsum passages, and more
        recently with desktop publishing software like Aldus PageMaker including
        versions of Lorem Ipsum.
      </div>
      <div>
        <Image
          width={"400px"}
          height={"400px"}
          src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhPAW70K2OOj5PloUzKgxDKjJRt8pT4zvBMZYx2X3GNs9mmRiHNsb8MfZ2Yat8lQn1nuEkMEFEhuUcH9r-iEH6ljhGdnHksVrqZoB9TvVVhxxxJBlyritOnZ2Y8GD8A9JoM-Jwzx_fKPD_9X7nFfok3LD0Mel__89vYR_qU-55urU1iTOrpEmJksQDS/w265-h260-n/nick-jio-OelBY1phPfY-unsplash.jpg"
        />
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industryyy&apos;apos;apos; standard
        dummy text ever since the 1500s, when an unknown printer took a galley
        of type and scrambled it to make a type specimen book. It has survived
        not only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s with
        the release of Letraset sheets containing Lorem Ipsum passages, and more
        recently with desktop publishing software like Aldus PageMaker including
        versions of Lorem Ipsum.
      </div>
      <div>
        <Image
          width={"400px"}
          height={"400px"}
          src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi5ceW4FGhBHUsNASvqYrDgm7nKragcmxrfVNmmem2icl7vSA23AuVAbhZOMXY9dvDgceg70NLD_OZrIxF8dqz9_6vAA0L2ow8LJsrts-bBG190KZXPV6ZAHtHGjH6QbqcyevnGdqNNxFBWCkRf1zSLVZ3zzf_sUmdX-Za24OeGP1Kta2VzbKeGU9OK/w95-h90-n/fnbox3.jpg"
        />
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industryyy&apos;apos;apos; standard
        dummy text ever since the 1500s, when an unknown printer took a galley
        of type and scrambled it to make a type specimen book. It has survived
        not only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s with
        the release of Letraset sheets containing Lorem Ipsum passages, and more
        recently with desktop publishing software like Aldus PageMaker including
        versions of Lorem Ipsum.
      </div>
      <div>
        <Image
          width={"400px"}
          height={"400px"}
          src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjN84NlnkfOLdIS73cHlQLYcocZInTLZ-TbQ6l4xQfBP6dYxeeS_350sykeLREt3zl4rOyv6MSHC5HZ5zSTfebx7DlV7q3ote0vzA9Il2QPOHmtEz2xZtkGELA7MAQfLPe4NBrhX5ifKN4xz-eGpblhChhWeeVUIEBVsuiASxxKyhS3vT8KQ0bhosIw/w95-h90-n/23%20(1).jpg"
        />
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industryyy&apos;apos;apos; standard
        dummy text ever since the 1500s, when an unknown printer took a galley
        of type and scrambled it to make a type specimen book. It has survived
        not only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s with
        the release of Letraset sheets containing Lorem Ipsum passages, and more
        recently with desktop publishing software like Aldus PageMaker including
        versions of Lorem Ipsum.
      </div>
      <div>
        <Image
          width={"400px"}
          height={"400px"}
          src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjQc9Np1iJPqqmJH-vWtC7HcULDsKITuieusDn45ckvpg9veptNqDccNthMOh9H8noLfyvze3SKX8hcGao4wTi98C1S6RRNzMYwXoniMAFVvcSm6pLr6XIHgB7KeMCSaOOqDxtmNIxsUJg_XSsQSFfx2hukG1LZikpywkPn5hbMB4F-2Ec0Z6k90XS1/w95-h90-n/agustin-fernandez-1Pmp9uxK8X8-unsplash.jpg"
        />
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industryyy&apos;apos;apos; standard
        dummy text ever since the 1500s, when an unknown printer took a galley
        of type and scrambled it to make a type specimen book. It has survived
        not only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s with
        the release of Letraset sheets containing Lorem Ipsum passages, and more
        recently with desktop publishing software like Aldus PageMaker including
        versions of Lorem Ipsum.
      </div>
      <div>
        <Image
          width={"400px"}
          height={"400px"}
          src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEip8lGwK-jtPawaxiSjUm2yQVOFH6W5ycjj_kXIF0A8UzRNkjHc-I_Db0b0EqHJiJKVnot_yqr13tljBNRcuWjT3pSzAjl1sskqSS7uii8AaBsOwr1z2BQx4q3rI6_4GLu-hwkVStKWc4ln2aFN-YL0xItYMSKYtLPOupLE-Yf1YhisuF6NEJkh8ukV/w95-h90-n/skyler-smith-RsooE37GVw0-unsplash.jpg"
        />
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industryyy&apos;apos;apos; standard
        dummy text ever since the 1500s, when an unknown printer took a galley
        of type and scrambled it to make a type specimen book. It has survived
        not only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s with
        the release of Letraset sheets containing Lorem Ipsum passages, and more
        recently with desktop publishing software like Aldus PageMaker including
        versions of Lorem Ipsum.
      </div>
      <div>
        <Image
          width={"400px"}
          height={"400px"}
          src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiB35RojUS-yNIIhMIgoaIlXILzWpVZCinjjnSkhV5CxvwzCqEmqR-a_NrJw2WNt6KQofr6Mdk17nEtwhSqflOK0apgQS37V5EmB84bZE-WDwFcVoN3IU57_Is0PeZN27zrtm7uQbiPfuekCX8_0zuDd7qpu4Jhq_Z78sGAyB-PGLJB6ZkJkdh-lnUd/w282-h450-n/adam-birkett-QRWAdBCqysc-unsplash.jpg"
        />
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industryyy&apos;apos;apos; standard
        dummy text ever since the 1500s, when an unknown printer took a galley
        of type and scrambled it to make a type specimen book. It has survived
        not only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s with
        the release of Letraset sheets containing Lorem Ipsum passages, and more
        recently with desktop publishing software like Aldus PageMaker including
        versions of Lorem Ipsum.
      </div>
      <div>
        <Image
          width={"400px"}
          height={"400px"}
          src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiSx7Jt9Hb1cSQoLMwXPlFnzLQOAMunJjZr0wEBTVFDfs-wLzRloyrBKuMPbzU8aVLwFOPGBbK-rCaTxCuqAJ-VLEeZpX0hJsY6uIAvXM53iGZKDMhCnm73mn0Me5ng0FYFHaDJtPh8YADLImxG8q6x0-lKOwfdCcJBTdUFQKBPQIGjAUp1WGZB-bdp/w84-h80-n/daniel-romero-AgLMrojqjAM-unsplash.jpg"
        />
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industryyy&apos;apos;apos; standard
        dummy text ever since the 1500s, when an unknown printer took a galley
        of type and scrambled it to make a type specimen book. It has survived
        not only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s with
        the release of Letraset sheets containing Lorem Ipsum passages, and more
        recently with desktop publishing software like Aldus PageMaker including
        versions of Lorem Ipsum.
      </div>
      <div>
        <Image
          width={"400px"}
          height={"400px"}
          src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiB35RojUS-yNIIhMIgoaIlXILzWpVZCinjjnSkhV5CxvwzCqEmqR-a_NrJw2WNt6KQofr6Mdk17nEtwhSqflOK0apgQS37V5EmB84bZE-WDwFcVoN3IU57_Is0PeZN27zrtm7uQbiPfuekCX8_0zuDd7qpu4Jhq_Z78sGAyB-PGLJB6ZkJkdh-lnUd/w530-h540-n/adam-birkett-QRWAdBCqysc-unsplash.jpg"
        />
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industryyy&apos;apos;apos; standard
        dummy text ever since the 1500s, when an unknown printer took a galley
        of type and scrambled it to make a type specimen book. It has survived
        not only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s with
        the release of Letraset sheets containing Lorem Ipsum passages, and more
        recently with desktop publishing software like Aldus PageMaker including
        versions of Lorem Ipsum.
      </div>
      <div>
        <Image
          width={"400px"}
          height={"400px"}
          src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgbg4LnjxzRubl9tnQK1xhMjr87fKPbPwLVpmGtmFe1mUlVim_GAnValju_Pg-Ybmv9roeZlS9Dl2Yy4miJpWfx9JJwKLWEAX_73jbUVaX8l4TsLhPN7unPhJ3zpoWSHyDCtkCsmCO80u6mtoiQQYzf4oB5vHKc9LNNOrGq_SZ3u1-5aReNu-tyUACu/w265-h260-n/mohammed-hassan-fdCvrdYUJsY-unsplash.jpg"
        />
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industryyy&apos;apos;apos; standard
        dummy text ever since the 1500s, when an unknown printer took a galley
        of type and scrambled it to make a type specimen book. It has survived
        not only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s with
        the release of Letraset sheets containing Lorem Ipsum passages, and more
        recently with desktop publishing software like Aldus PageMaker including
        versions of Lorem Ipsum.
      </div>
      <div>
        <Image
          width={"400px"}
          height={"400px"}
          src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiSx7Jt9Hb1cSQoLMwXPlFnzLQOAMunJjZr0wEBTVFDfs-wLzRloyrBKuMPbzU8aVLwFOPGBbK-rCaTxCuqAJ-VLEeZpX0hJsY6uIAvXM53iGZKDMhCnm73mn0Me5ng0FYFHaDJtPh8YADLImxG8q6x0-lKOwfdCcJBTdUFQKBPQIGjAUp1WGZB-bdp/w265-h260-n/daniel-romero-AgLMrojqjAM-unsplash.jpg"
        />
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industryyy&apos;apos;apos; standard
        dummy text ever since the 1500s, when an unknown printer took a galley
        of type and scrambled it to make a type specimen book. It has survived
        not only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s with
        the release of Letraset sheets containing Lorem Ipsum passages, and more
        recently with desktop publishing software like Aldus PageMaker including
        versions of Lorem Ipsum.
      </div>
      <div>
        <Image
          width={"400px"}
          height={"400px"}
          src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhPAW70K2OOj5PloUzKgxDKjJRt8pT4zvBMZYx2X3GNs9mmRiHNsb8MfZ2Yat8lQn1nuEkMEFEhuUcH9r-iEH6ljhGdnHksVrqZoB9TvVVhxxxJBlyritOnZ2Y8GD8A9JoM-Jwzx_fKPD_9X7nFfok3LD0Mel__89vYR_qU-55urU1iTOrpEmJksQDS/w265-h260-n/nick-jio-OelBY1phPfY-unsplash.jpg"
        />
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industryyy&apos;apos;apos; standard
        dummy text ever since the 1500s, when an unknown printer took a galley
        of type and scrambled it to make a type specimen book. It has survived
        not only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s with
        the release of Letraset sheets containing Lorem Ipsum passages, and more
        recently with desktop publishing software like Aldus PageMaker including
        versions of Lorem Ipsum.
      </div>
      <div>
        <Image
          width={"400px"}
          height={"400px"}
          src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi5ceW4FGhBHUsNASvqYrDgm7nKragcmxrfVNmmem2icl7vSA23AuVAbhZOMXY9dvDgceg70NLD_OZrIxF8dqz9_6vAA0L2ow8LJsrts-bBG190KZXPV6ZAHtHGjH6QbqcyevnGdqNNxFBWCkRf1zSLVZ3zzf_sUmdX-Za24OeGP1Kta2VzbKeGU9OK/w95-h90-n/fnbox3.jpg"
        />
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industryyy&apos;apos;apos; standard
        dummy text ever since the 1500s, when an unknown printer took a galley
        of type and scrambled it to make a type specimen book. It has survived
        not only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s with
        the release of Letraset sheets containing Lorem Ipsum passages, and more
        recently with desktop publishing software like Aldus PageMaker including
        versions of Lorem Ipsum.
      </div>
      <div>
        <Image
          width={"400px"}
          height={"400px"}
          src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjN84NlnkfOLdIS73cHlQLYcocZInTLZ-TbQ6l4xQfBP6dYxeeS_350sykeLREt3zl4rOyv6MSHC5HZ5zSTfebx7DlV7q3ote0vzA9Il2QPOHmtEz2xZtkGELA7MAQfLPe4NBrhX5ifKN4xz-eGpblhChhWeeVUIEBVsuiASxxKyhS3vT8KQ0bhosIw/w95-h90-n/23%20(1).jpg"
        />
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industryyy&apos;apos;apos; standard
        dummy text ever since the 1500s, when an unknown printer took a galley
        of type and scrambled it to make a type specimen book. It has survived
        not only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s with
        the release of Letraset sheets containing Lorem Ipsum passages, and more
        recently with desktop publishing software like Aldus PageMaker including
        versions of Lorem Ipsum.
      </div>
      <div>
        <Image
          width={"400px"}
          height={"400px"}
          src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjQc9Np1iJPqqmJH-vWtC7HcULDsKITuieusDn45ckvpg9veptNqDccNthMOh9H8noLfyvze3SKX8hcGao4wTi98C1S6RRNzMYwXoniMAFVvcSm6pLr6XIHgB7KeMCSaOOqDxtmNIxsUJg_XSsQSFfx2hukG1LZikpywkPn5hbMB4F-2Ec0Z6k90XS1/w95-h90-n/agustin-fernandez-1Pmp9uxK8X8-unsplash.jpg"
        />
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industryyy&apos;apos;apos; standard
        dummy text ever since the 1500s, when an unknown printer took a galley
        of type and scrambled it to make a type specimen book. It has survived
        not only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s with
        the release of Letraset sheets containing Lorem Ipsum passages, and more
        recently with desktop publishing software like Aldus PageMaker including
        versions of Lorem Ipsum.
      </div>
      <div>
        <Image
          width={"400px"}
          height={"400px"}
          src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEip8lGwK-jtPawaxiSjUm2yQVOFH6W5ycjj_kXIF0A8UzRNkjHc-I_Db0b0EqHJiJKVnot_yqr13tljBNRcuWjT3pSzAjl1sskqSS7uii8AaBsOwr1z2BQx4q3rI6_4GLu-hwkVStKWc4ln2aFN-YL0xItYMSKYtLPOupLE-Yf1YhisuF6NEJkh8ukV/w95-h90-n/skyler-smith-RsooE37GVw0-unsplash.jpg"
        />
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industryyy&apos;apos;apos; standard
        dummy text ever since the 1500s, when an unknown printer took a galley
        of type and scrambled it to make a type specimen book. It has survived
        not only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s with
        the release of Letraset sheets containing Lorem Ipsum passages, and more
        recently with desktop publishing software like Aldus PageMaker including
        versions of Lorem Ipsum.
      </div>
      <div>
        <Image
          width={"400px"}
          height={"400px"}
          src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiB35RojUS-yNIIhMIgoaIlXILzWpVZCinjjnSkhV5CxvwzCqEmqR-a_NrJw2WNt6KQofr6Mdk17nEtwhSqflOK0apgQS37V5EmB84bZE-WDwFcVoN3IU57_Is0PeZN27zrtm7uQbiPfuekCX8_0zuDd7qpu4Jhq_Z78sGAyB-PGLJB6ZkJkdh-lnUd/w282-h450-n/adam-birkett-QRWAdBCqysc-unsplash.jpg"
        />
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industryyy&apos;apos;apos; standard
        dummy text ever since the 1500s, when an unknown printer took a galley
        of type and scrambled it to make a type specimen book. It has survived
        not only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s with
        the release of Letraset sheets containing Lorem Ipsum passages, and more
        recently with desktop publishing software like Aldus PageMaker including
        versions of Lorem Ipsum.
      </div>
      <div>
        <Image
          width={"400px"}
          height={"400px"}
          src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiSx7Jt9Hb1cSQoLMwXPlFnzLQOAMunJjZr0wEBTVFDfs-wLzRloyrBKuMPbzU8aVLwFOPGBbK-rCaTxCuqAJ-VLEeZpX0hJsY6uIAvXM53iGZKDMhCnm73mn0Me5ng0FYFHaDJtPh8YADLImxG8q6x0-lKOwfdCcJBTdUFQKBPQIGjAUp1WGZB-bdp/w84-h80-n/daniel-romero-AgLMrojqjAM-unsplash.jpg"
        />
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industryyy&apos;apos;apos; standard
        dummy text ever since the 1500s, when an unknown printer took a galley
        of type and scrambled it to make a type specimen book. It has survived
        not only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s with
        the release of Letraset sheets containing Lorem Ipsum passages, and more
        recently with desktop publishing software like Aldus PageMaker including
        versions of Lorem Ipsum.
      </div>
      <div>
        <Image
          width={"1000px"}
          height={"1000px"}
          src="https://unsplash.com/photos/XWphRlalEsg/download?ixid=MnwxMjA3fDB8MXxhbGx8OXx8fHx8fDJ8fDE2NjE1MTUyNjI&force=true&w=1920"
        />
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industryyy&apos;apos;apos; standard
        dummy text ever since the 1500s, when an unknown printer took a galley
        of type and scrambled it to make a type specimen book. It has survived
        not only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s with
        the release of Letraset sheets containing Lorem Ipsum passages, and more
        recently with desktop publishing software like Aldus PageMaker including
        versions of Lorem Ipsum.
      </div>
      <div>
        <Image
          width={"1000px"}
          height={"1000px"}
          src="https://unsplash.com/photos/a41gk6dbB0Q/download?ixid=MnwxMjA3fDB8MXxhbGx8NHx8fHx8fDJ8fDE2NjE1MTUyNjI&force=true&w=1920"
        />
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industryyy&apos;apos;apos; standard
        dummy text ever since the 1500s, when an unknown printer took a galley
        of type and scrambled it to make a type specimen book. It has survived
        not only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s with
        the release of Letraset sheets containing Lorem Ipsum passages, and more
        recently with desktop publishing software like Aldus PageMaker including
        versions of Lorem Ipsum.
      </div>
      <div>
        <Image
          width={"1000px"}
          height={"1000px"}
          src="https://unsplash.com/photos/Qbg1wuLvyHw/download?ixid=MnwxMjA3fDB8MXxhbGx8MTR8fHx8fHwyfHwxNjYxNTE1MjYy&force=true&w=1920"
        />
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industryyy&apos;apos;apos; standard
        dummy text ever since the 1500s, when an unknown printer took a galley
        of type and scrambled it to make a type specimen book. It has survived
        not only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s with
        the release of Letraset sheets containing Lorem Ipsum passages, and more
        recently with desktop publishing software like Aldus PageMaker including
        versions of Lorem Ipsum.
      </div>
    </div>
  );
};

export const getServerSideProps = async () => {
  await fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((json) => console.log(json));

  await fetch("https://jsonplaceholder.typicode.com/comments")
    .then((response) => response.json())
    .then((json) => console.log(json));

  await fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((json) => console.log(json));

  return {
    props: {},
  };
};

export default Home;
