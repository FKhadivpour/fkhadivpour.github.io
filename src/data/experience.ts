import { links } from './site';

export type Job = {
  /** The kind of place: shown as a small label above the role. */
  env: string;
  role: string;
  company: string;
  href: string;
  /** The company's full name, when `company` is an abbreviation. */
  note?: string;
  location: string;
  dates: string;
  /** Trusted HTML: these lines are written here and may carry inline links. */
  points: string[];
  stack: string[];
};

const a = (href: string, text: string) => `<a href="${href}" rel="noopener">${text}</a>`;

export const experience: Job[] = [
  {
    env: 'Startup',
    role: 'Founding AI Engineer',
    company: 'SISA Energy',
    href: links.sisa,
    location: 'Vancouver, BC',
    dates: 'Jan 2025 – present',
    points: [
      `Designed, built and operate SISA AI, the agentic service behind ${a(links.collectflow, 'CollectFlow')}, deployed on AWS, with one versioned interface across Anthropic, OpenAI and Google. Own it from architecture through evaluation, monitoring and on-call.`,
      "Shipped CollectFlow's conversational AI: an agent that gives users the full capability of the platform through chat, used daily by analysts and administrators at enterprise clients.",
      'Built the harness that makes autonomous action safe: evaluation as a release gate, permission-scoped tools, a prompt injection firewall, output validation, multi-tenant isolation and request-level tracing.',
      'Cut field data capture from days to under a few hours with multimodal extraction at 95%+ accuracy, and made bulk LLM data import 95% faster and cheaper by redesign.',
      'Product owner and core engineer on CollectFlow, full stack: top human contributor, from client discovery and RFC through to production support.',
      "Defined the team's AI-native development workflow, with human review of every design and plan.",
    ],
    stack: ['Python', 'React', 'TypeScript', 'AWS', 'LangSmith', 'Sentry', 'PagerDuty'],
  },
  {
    env: 'Enterprise',
    role: 'Data Scientist',
    company: 'Scotiabank',
    href: links.scotiabank,
    location: 'Edmonton, AB',
    dates: 'Jan 2022 – Jan 2023',
    points: [
      'Built default and credit risk prediction models on time series data from 800,000+ loan applications and credit records in a regulated banking environment, including a deep learning model combining LSTM and attention layers.',
      'Delivered the full pipeline in Python and SQL: data exploration, feature engineering, training, hyperparameter tuning and validation.',
      'Applied explainable AI methods with academic collaborators, improving interpretability metrics by 15% in support of model review and governance.',
    ],
    stack: ['Python', 'SQL', 'LSTM', 'attention'],
  },
  {
    env: 'Research institute',
    role: 'Machine Learning Researcher',
    company: 'Amii',
    href: links.amii,
    note: 'Alberta Machine Intelligence Institute',
    location: 'Edmonton, AB',
    dates: 'May 2020 – Jan 2025',
    points: [
      'Proposed and published Responsibility, an interpretability method for deep neural networks (AIIDE EXAG, arXiv), and designed the evaluation methodology and metrics used to compare it with baselines.',
      'Improved interpretability by 5% on image classification and 20% on text classification.',
      'Designed and ran a 300-participant human evaluation study, establishing a 30% preference over baseline approaches.',
      'Trained CNNs, diffusion models and transformers end to end on Compute Canada GPU clusters, and fine-tuned GPT-2 with LoRA.',
    ],
    stack: ['PyTorch', 'TensorFlow', 'Keras', 'Hugging Face', 'Slurm', 'R'],
  },
  {
    env: 'Research lab',
    role: 'Machine Learning Researcher',
    company: 'NCBLab',
    href: links.ncblab,
    note: 'Neuromuscular Control & Biomechanics Laboratory',
    location: 'Edmonton, AB',
    dates: 'Jan 2020 – May 2020',
    points: [
      `Delivered a client project for ${a(links.rwdi, 'RWDI')} with a team of 5, two weeks ahead of schedule: automated manual spatial data extraction and trained models reaching 94% accuracy on a key target variable.`,
    ],
    stack: ['PyTorch', 'XGBoost', 'scikit-learn', 'Weights & Biases'],
  },
];
