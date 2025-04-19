
import { Layout } from "@/components/Layout";

const AboutPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-secondary/50 py-12 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold">About Our Company</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              A family business dedicated to quality, reliability, and exceptional service since 2005.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                卓步运动成立于2020年，位于浙江金华，是一家专注于高端智能跑步机研发、生产与销售的创新型体育科技公司。我们集工程设计、人体工学、
                数据分析与物联网技术于一身，致力于为家庭场景提供安全、耐用、智能化的跑步解决方案。
                自创立以来，极迈跑步已服务超过10,000+家庭用户和200+专业健身房合作伙伴，帮助千万跑友实现科学运动、健康生活。
                </p>
                <p>
                未来，极迈跑步将继续深化“科技+健康+社交”生态，通过云端大数据与社群运营，构建跑友交流平台，举办线上线下马拉松、
                虚拟团跑等活动，帮助用户在家也能享受专业训练与社群互动的双重体验。我们坚信：以科技驱动健身，以品质成就健康，
                让每一台极迈跑步机成为用户通往美好生活的“动”力伙伴。  
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/3] bg-muted rounded-lg overflow-hidden">
              <img 
                src="/img/about-story.jpg" 
                alt="Our company history" 
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 md:py-24 bg-secondary/50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">卓步的使命与愿景</h2>
            <p className="text-lg mb-12">
              We're driven by our commitment to excellence and guided by core values that define everything we do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-background p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">我们的使命</h3>
              <p className="text-muted-foreground">
              我们以对卓越的承诺为动力，并以定义我们一切行动的核心价值观为指引
              </p>
            </div>
            <div className="bg-background p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">我们的愿景</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li><span className="font-medium text-foreground">成为全球跑步机行业的标杆</span>:引领智能健身设备创新</li>
                <li><span className="font-medium text-foreground">构建“跑步＋社交＋健康”生态</span>: 让每一次开机，都能连接志同道合的跑者，分享进步与快乐</li>
                <li><span className="font-medium text-foreground">推动全民健康</span>: 让科技赋能更多人享受运动带来的身心平衡与长久活力。  </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

    </Layout>
  );
};

export default AboutPage;
